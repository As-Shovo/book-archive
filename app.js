// Global Variable 
const inputField = document.getElementById('input-field');
const searchButton = document.getElementById('button-search');
const booksItems = document.getElementById('books-items');

// click Event Button Search

searchButton.addEventListener('click', () => {
    const inputFieldValue = inputField.value;
    // const url = ` http://openlibrary.org/search.json?q=${inputFieldValue}`;
    const url = ` http://openlibrary.org/search.json?q=A Game of Thrones`;

    // Function of Data Load 
    const libaryLoad = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => displayLibaryData(data))
    }
    libaryLoad();
    inputField.value = '';

    // Function of Data Display 
    const displayLibaryData = libaryDatas => {
        console.log(libaryDatas.docs.length);
        const libaryBooks = libaryDatas.docs;

        libaryBooks.forEach(libarybook => {
            // console.log(libarybook.cover_i);

            if (libarybook.cover_i) {
                const div = document.createElement('div');
                div.className = 'col m-auto';
                div.innerHTML = `
                <div class="m-3">
                <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${libarybook.cover_i}-M.jpg" class="card-img-top img-fluid" />
                    <div class="card-footer text-center">
                        <h6 class="card-title">Book Title : ${libarybook.title}</h6>
                        <p><b>Author Name :</b> ${libarybook.author_name} </p>
                        <p><b>Published Date :</b> ${libarybook.publish_date} </p>
                    </div>
                    <button class='btn btn-success btn-sm mt-2'>More</button>
                </div>

                </div>
            
            `
                booksItems.appendChild(div);
            }




        });
    }
})
