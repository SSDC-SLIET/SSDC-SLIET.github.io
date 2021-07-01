let data = [
    {
        name: "Adarsh Prashar",
        photo: "assets/img/Students/Adarsh Prashar.jpg"
    },
    {
        name: "Adish Jain",
        photo: "assets/img/Students/Adish Jain.jpg"
    },
    {
        name: "Aditya Parihar",
        photo: "assets/img/Students/Aditya Parihar.jpg"
    },
    {
        name: "Amit Kumar",
        photo: "assets/img/Students/Amit Kumar.jpg"
    },
    {
        name: "Amitoj Singh <br> Ahuja",
        photo: "assets/img/Students/Amitoj Singh Ahuja.jpg"
    },
    {
        name: "Amritanjali",
        photo: "assets/img/Students/Amritanjali.jpg"
    },
    {
        name: "Ankit Mishra",
        photo: "assets/img/Students/Ankit Mishra.jpg"
    },
    {
        name: "Arjun Raj",
        photo: "assets/img/Students/Arjun Raj.jpeg"
    },
    {
        name: "Aryamann Sinha",
        photo: "assets/img/Students/Aryamann Sinha.jpg"
    },
    {
        name: "Ashish Kumar",
        photo: "assets/img/Students/Ashish Kumar.jpg"
    },
    {
        name: "Atal Singh",
        photo: "assets/img/Students/Atal Singh.jpg"
    },
    {
        name: "Ayush Keserwani",
        photo: "assets/img/Students/Ayush Kesarwani.png"
    },
    {
        name: "Bhavesh Soni",
        photo: "assets/img/Students/Bhavesh Soni.jpg"
    },
    {
        name: "Chandan Kumar",
        photo: "assets/img/Students/Chandan Kumar.jpg"
    },
    {
        name: "Devendra Kumar",
        photo: "assets/img/Students/Devendra Kumar.jpg"
    },
    {
        name: "Gyanendra Rawat",
        photo: "assets/img/Students/Gyanendra Rawat.jpg"
    },
    {
        name: "Kamal Meena",
        photo: "assets/img/Students/Kamal Meena.jpg"
    },
    {
        name: "Karan Kumar",
        photo: "assets/img/Students/Karan Kumar.jpg"
    },
    {
        name: "Manjeeta Maurya",
        photo: "assets/img/Students/Manjeeta Maurya.jpg"
    },
    {
        name: "Masoom Mittal",
        photo: "assets/img/Students/Masoom Mittal.jpeg"
    },
    {
        name: "Mrinalini Pratap Singh",
        photo: "assets/img/Students/Mrinalini Pratap Singh.jpg"
    },
    {
        name: "Mukesh Kumar",
        photo: "assets/img/Students/Mukesh Kumar.jpg"
    },
    {
        name: "Nem Singh",
        photo: "assets/img/Students/Nem Singh.jpg"
    },
    {
        name: "Prateek Rai",
        photo: "assets/img/Students/Prateek rai.jpg"
    },
    {
        name: "Prerna Kumari",
        photo: "assets/img/Students/Prerna Kumari.jpg"
    },
    {
        name: "Rahul Kumar Mishra",
        photo: "assets/img/Students/Rahul kumar Mishra.jpg"
    },
    {
        name: "Raj Abhishek Maurya",
        photo: "assets/img/Students/Raj Abhishek Maurya.jpg"
    },
    {
        name: "Rajan Saini",
        photo: "assets/img/Students/Rajan Saini.jpg"
    },
    {
        name: "Ruchika",
        photo: "assets/img/Students/Ruchika.jpg"
    },
    {
        name: "Satyam Kumar",
        photo: "assets/img/Students/Satyam Kumar.jpeg"
    },
    {
        name: "Satyam Mittal",
        photo: "assets/img/Students/Satyam Mittal.jpg"
    },
    {
        name: "Shailesh Kumar",
        photo: "assets/img/Students/Shailesh Kumar.jpg"
    },
    {
        name: "Shivam Raj",
        photo: "assets/img/Students/Shivam Raj.jpg"
    },
    {
        name: "Shrawan Kumar",
        photo: "assets/img/Students/Shrawan Kumar.jpg"
    },
    {
        name: "Shrejal Singh",
        photo: "assets/img/Students/Shrejal Singh.jpg"
    },
    {
        name: "Shyam Kumar",
        photo: "assets/img/Students/Shyam Kumar.jpeg"
    },
    {
        name: "Siddarth Kumar",
        photo: "assets/img/Students/Siddharth Kumar.jpg"
    },
    {
        name: "Soni Kumari",
        photo: "assets/img/Students/Soni kumari.jpg"
    },
    {
        name: "Soumya Ranjan",
        photo: "assets/img/Students/Soumya Ranjan.jpg"
    },
    {
        name: "Sumit Kumar",
        photo: "assets/img/Students/Sumit kumar.jpg"
    },
    {
        name: "Vipul Jha",
        photo: "assets/img/Students/Vipul Jha.jpeg"
    }
];

document.getElementById("team-container").innerHTML = `
${data.map((item) => {
    return `
    <div class="student-card">
        <div class="student-img">
            <img src="${item.photo}" alt="">
        </div>
        <div class="student-name">${item.name}</div>
    </div>
    `
}).join('')}
`