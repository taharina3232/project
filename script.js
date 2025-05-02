const books = [
    { id: 1, title: "Bangladesh.", author: "Ansel Schmidt II" },
    { id: 2, title: "Ullam beatae sed distinctio repellat voluptatem ut.", author: "Jaylen Hayes" },
    { id: 3, title: "Eius totam nisi quod earum in.", author: "Dr. Jabari Streich IV" },
    { id: 4, title: "Ex aut voluptatem dolorem.", author: "Russel Wisoky" },
    { id: 5, title: "Consequuntur tempore sunt qui quasi eos aspernatur sint.", author: "Nolan Langosh Jr." },
    { id: 6, title: "Voluptas aut tempora molestiae delectus ipsum architecto et.", author: "Dashawn Ratke" },
    { id: 7, title: "Doloribus facilis exercitationem expedita a est provident repudiandae.", author: "Pansy Beer" },
    { id: 8, title: "Et reiciendis in distinctio.", author: "Alysha Schimmel" },
    { id: 9, title: "Eum id quia sed nostrum doloremque.", author: "Prof. Mario Koss" },
    { id: 10, title: "Libero est minus error impedit ad consequuntur et vero.", author: "Marisol Kuphal" },
    { id: 11, title: "Enim voluptatem voluptatem ut quaerat rerum autem.", author: "Miss Mozell Keeling Sr." },
    { id: 12, title: "Architecto deleniti suscipit neque itaque.", author: "Johnnie Wisozk" },
    { id: 13, title: "Ratione molestias cupiditate dolorem error.", author: "Zella Hamill" },
    { id: 14, title: "Officiis expedita id voluptas.", author: "Everette O'Reilly" },
    { id: 15, title: "Temporibus laborum accusantium magnam.", author: "Vada Nicolas" },
    { id: 16, title: "Doloremque vero ea recusandae.", author: "Caitlyn Rice" },
    { id: 17, title: "Laudantium quae consequatur voluptas.", author: "Dannie Daniel" },
    { id: 18, title: "Modi corrupti nulla veniam earum.", author: "Armand Walter" },
    { id: 19, title: "Sapiente totam a ad dolorem.", author: "Daryl Dickens" },
    { id: 20, title: "Autem excepturi repellat facere rerum.", author: "Clarissa Howell" },
    { id: 21, title: "Voluptatibus at sint eos quaerat.", author: "Arianna Cruickshank" },
    { id: 22, title: "Eligendi quo unde nesciunt tempora.", author: "Keagan Carter" },
    { id: 23, title: "Veniam voluptatem nobis reiciendis.", author: "Yasmin Nolan" },
    { id: 24, title: "Quasi culpa fugit ducimus rerum.", author: "Enrico Connelly" },
    { id: 25, title: "Nulla voluptatem nobis deserunt ipsa.", author: "Osborne Kreiger" },
    { id: 26, title: "Fugiat repellendus pariatur exercitationem velit.", author: "Aleen Jacobson" },
    { id: 27, title: "Incidunt iste tempore qui maxime.", author: "Cleo Homenick" },
    { id: 28, title: "Ad dolor qui distinctio soluta.", author: "Talon Gorczany" },
    { id: 29, title: "Tenetur hic molestias quia officiis.", author: "Wilma Dickens" },
    { id: 30, title: "Tempora laboriosam dolor beatae.", author: "Jackie Bechtelar" },
    { id: 31, title: "Ut delectus et amet praesentium.", author: "Luciano Smith" },
    { id: 32, title: "Minus alias impedit deleniti quasi.", author: "Anika Renner" },
    { id: 33, title: "Dolore ab quas sint reiciendis.", author: "Terrence Herman" },
    { id: 34, title: "Suscipit eos debitis quidem officia.", author: "Brisa Lueilwitz" },
    { id: 35, title: "Iure ducimus deserunt est atque.", author: "Cristina Torp" }
];

function renderTable(data) {
    const tableBody = document.getElementById("bookTableBody");
    tableBody.innerHTML = "";

    data.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="details">Details</button>
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    if (searchTerm === "") {
        renderTable(books); 
        return;
    }

    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );

    renderTable(filtered);
}


document.addEventListener("DOMContentLoaded", () => {
    renderTable(books); 

    const searchBtn = document.getElementById("searchBtn");
    if (searchBtn) {
        searchBtn.addEventListener("click", searchBooks);
    }

    document.getElementById("searchInput").addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            searchBooks();
        }
    });
});
