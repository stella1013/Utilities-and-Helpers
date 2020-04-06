import csv
import requests
from BeautifulSoup import BeautifulSoup

url='http://veronicapreston.com/ux'
response = requests.get(url)
html = response.content
#print html

soup = BeautifulSoup(html)
table = soup.find("article")
#print soup.prettify()
#print table
list_of_rows = []
list_of_cells = []

def pullInfo(element):
	for cell in row.findAll(element):
		if cell == "img":
			text = cell.get('src')
			list_of_cells.append(text)
		else:
			text = cell.text.replace('&nbsp;', '')
			list_of_cells.append(text)

for row in table.findAll('div', {'class': 'large-6 columns'}):
	blockElements = ["h3", "h6", "p", "img" ]
	for better in blockElements:
		pullInfo(better)
list_of_rows.append(list_of_cells)

#print list_of_cells

outfield = open("./projects.csv", "wb")
writer = csv.writer(outfield)
writer.writerow(["projectname", "role", "description", "img1", "img2", "img3", "category"])
writer.writerows(list_of_rows)

