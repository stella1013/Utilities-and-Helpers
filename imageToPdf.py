#To run use Python 3. hidden and unhidden .DS_Store files will cause an error. delete from inputs folder. 
#run - python3 imageToPdf.py
#TODO: 
#ignore .DS_Store
#remove .pdf from file extension
#resize width to 1024
#compress jpegs
from pdf2image import convert_from_path, convert_from_bytes
from pdf2image.exceptions import (
    PDFInfoNotInstalledError,
    PDFPageCountError,
    PDFSyntaxError
)
import os, sys
from PIL import Image
import tempfile
#
#with tempfile.TemporaryDirectory() as path:
    #pages = convert_from_path(pdf_path='03__getting_a_new_kidney_kpcop_creative_needs-med.-pdf-link.pdf', dpi=300, output_folder='outputs/', fmt='JPEG',single_file=True, paths_only=True)
#    for filename in os.listdir('pdfs'):
#        pages = convert_from_path(pdf_path='pdfs/'+filename, dpi=300, output_folder='outputs/', fmt='JPEG',single_file=False)
def convert_pdf(file_path, output_path):
    # save temp image files in temp dir, delete them after we are finished
    with tempfile.TemporaryDirectory() as temp_dir:
        # convert pdf to multiple image
        print(file_path)
        for filename in os.listdir(file_path):
            print(file_path+filename)
            images = convert_from_path(pdf_path=file_path+filename, output_folder=temp_dir)
                # save images to temporary directory
            temp_images = []
            for i in range(len(images)):
                    image_path = f'{temp_dir}/{i}.jpg'
                    images[i].save(image_path, 'JPEG')
                    temp_images.append(image_path)
                # read images into pillow.Image
            imgs = list(map(Image.open, temp_images))
            # find minimum width of images
            min_img_width = min(i.width for i in imgs)
            # find total height of all images
            total_height = 0
            for i, img in enumerate(imgs):
                total_height += imgs[i].height
            # create new image object with width and total height
            merged_image = Image.new(imgs[0].mode, (min_img_width, total_height))
            # paste images together one by one
            y = 0
            for img in imgs:
                merged_image.paste(img, (0, y))
                y += img.height
            # save merged image
            merged_image.save(output_path+filename+'.jpg', 'JPEG')
        #return output_path

convert_pdf('inputs/', 'outputs/')