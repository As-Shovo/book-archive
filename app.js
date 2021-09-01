// Global Variable 
const inputField = document.getElementById('input-field');
const searchButton = document.getElementById('button-search');
const booksItems = document.getElementById('books-items');
const showResultNumber = document.getElementById('show-result-number');

// click Event Button Search

searchButton.addEventListener('click', () => {
    const inputFieldValue = inputField.value;
    const url = `https://openlibrary.org/search.json?q=${inputFieldValue}`;
    // const url = ` https://openlibrary.org/search.json?q=javascript`;

    //clear books Items Field
    booksItems.textContent = '';

    // Clear show rsult 
    showResultNumber.innerHTML = '';

    // Function of Data Load 
    const libaryLoad = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => displayLibaryData(data))

    }
    libaryLoad();
    // clear input field
    inputField.value = '';



    // Function of Data Display 
    const displayLibaryData = libaryDatas => {
        //clear books Items Field
        // booksItems.textContent = '';

        // // Clear show rsult 
        // showResultNumber.innerHTML= '';


        if (libaryDatas.numFound === 0) {
            
            return errorMessage();
        };

        console.log(libaryDatas.numFound);
        const libaryBooks = libaryDatas.docs;

        showResultNumber.innerHTML = `
            <div class="card m-auto p-3 mt-3 bg-success" style="width: 35rem">
                <h5 class="card-title text-center">Dear Sir/Ma'am, Your Result Number is <b class="text-warning">-- ${libaryBooks.length} --</b></h5>
            </div>
        `;



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
            // console.log('error');




        });
    }
})

const errorMessage = () => {
    const errorMessageDiv = document.getElementById("error-message");
    // document.getElementById("p").innerHTML = "";
    const valueInput = document.getElementById('input-field');
    console.log(valueInput.value);
        


    errorMessageDiv.innerHTML = ` <div class="card m-auto p-5 mt-5 bg-warning" style="width: 18rem">
          <h5 class="card-title">Dear Sir/Ma'am,</h5>
          <p class="card-text">
            Your search <b class="text-danger">-- ${valueInput.value} --</b> did not match Book Name. Please enter a
            correct name.
          </p>
        </div>`;

        // showResultNumber.innerText ='';
}

// errorMessage();