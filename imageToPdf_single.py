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
with tempfile.TemporaryDirectory() as path:
  #pages = convert_from_path(pdf_path='03__getting_a_new_kidney_kpcop_creative_needs-med.-pdf-link.pdf', dpi=300, output_folder='outputs/', fmt='JPEG',single_file=True, paths_only=True)
   for filename in os.listdir('inputs'):
      convert_from_path(pdf_path='inputs/'+filename, dpi=300, output_folder='outputs/', fmt='JPEG',single_file=True, paths_only=True)
