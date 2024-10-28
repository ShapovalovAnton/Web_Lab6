        var html = "";
        var html_task1 = "";
        var a = [];

        function generate_arr() {
            let table = document.getElementById("table1");
            let r = table.rows.length;
            let c = table.rows[0].cells.length;
            let arr = [];

            for (let i = 0; i < r; i++) {
                arr[i] = [];
                for (let j = 0; j < c; j++) {
                    arr[i][j] = table.rows[i].cells[j].innerHTML;
                }
            }
            return arr; // Повертаємо масив
        }

        function vivod(item, i) {
            html += "<li>" + item[i][0] + "<ul>"; // Додаємо заголовок
            for (let j = 1; j < item[i].length; j++) {
                html += "<li>" + item[i][j] + "</li>"; // Додаємо елементи
            }
            html += "</ul></li>"; // Закриваємо підсписок
        }

        function display() {
            html = "<ul>"; // Відкриваємо головний список
            a = generate_arr(); // Викликаємо функцію для отримання масиву
            for (let i = 0; i < a.length; i++) { // Починаємо з 1, щоб пропустити заголовки
                vivod(a, i); // Формуємо список для кожного рядка
            }
            html += "</ul>"; // Закриваємо головний список
            document.getElementById('result').innerHTML = html; // Виводимо результат
        }

        
 //Виникала помилка, тому обгорнув в "DOMContentLoaded"
         document.addEventListener("DOMContentLoaded", function() {
             //обробка натискання клавіші
             document.getElementById("author_name").addEventListener("keydown", function(event){
                 if(event.key=="Enter"){
                     genre=document.getElementById("genre").value;
                     author=document.getElementById("author_name").value;
                     book=document.getElementById("book_name").value;

                     //Перевірка заповнення полів
                     if(genre&&author&&book){
                         addBook(genre,author,book);
                         //Очищуємо поля
                         document.getElementById("book_name").value = "";
                         document.getElementById("author_name").value = "";
                     }

                }
             });

             function addBook(genre, bookName, authorName) {
                          collectionDiv = document.getElementById("book-collection");
                
                          // Шукаємо список для даного жанру або створюємо новий
                          let genreSection = document.querySelector(`.genre-${genre}`);
                          if (!genreSection) {
                              genreSection = document.createElement("div");
                              genreSection.className = `genre-section genre-${genre}`;
                              genreSection.innerHTML = `<h3>${genre}</h3><ul></ul>`;
                              collectionDiv.appendChild(genreSection);
                         }
                
                          // Додаємо книгу до списку відповідного жанру
                          const list = genreSection.querySelector("ul");
                          const listItem = document.createElement("li");
                          listItem.textContent = `${bookName} – ${authorName}`;
                          list.appendChild(listItem);
                      }
         });


        
        
        