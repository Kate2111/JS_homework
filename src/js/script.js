// Функция для подсчета количества div-элементов с классом "border" в HTML-строке
function countDivElementsWithBorder(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return document.querySelectorAll('div.border').length;
  }
  
  // Функция для загрузки HTML-файла и подсчета количества div-элементов с классом "border"
  function countDivElementsWithBorderInHTMLFile(htmlFile) {
    return fetch('src/index/' + htmlFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load HTML file: ' + htmlFile);
        }
        return response.text();
      })
      .then(html => countDivElementsWithBorder(html));
  }
  
  // Функция для подсчета общего количества div-элементов с классом "border" во всех HTML-файлах
  function countTotalDivElementsWithBorder(htmlFiles) {
    const promises = htmlFiles.map(htmlFile => countDivElementsWithBorderInHTMLFile(htmlFile));
    return Promise.all(promises)
      .then(divCounts => divCounts.reduce((total, count) => total + count, 0));
  }
  
  // Загрузка списка HTML-файлов из директории
  fetch('src/index/list_of_html_files.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load the list of HTML files');
      }
      return response.text();
    })
    .then(fileList => {
      const htmlFiles = fileList.split('\n').filter(Boolean);
      console.log(htmlFiles);
      return countTotalDivElementsWithBorder(htmlFiles);
    })
    .then(totalDivCount => {
      console.log('Total div elements with class "border": ' + totalDivCount);
    })
    .catch(error => {
      console.error('Error: ' + error.message);
    });
  