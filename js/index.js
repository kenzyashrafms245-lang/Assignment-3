var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteURL");
var tableContent = document.getElementById("tableContent");

var bookMarks = [];

function addBookmark() {
  var nameValue = siteNameInput.value.trim();
  var urlValue = siteUrlInput.value.trim();


  var bookMark = {
    name: siteNameInput.value,
    link: siteUrlInput.value,
  };

  bookMarks.push(bookMark);
  localStorage.setItem("bookmarksList", JSON.stringify(bookMarks));
  displayBookmarks();
  clearInputs();
}

function displayBookmarks() {
  var cartona = "";
  for (var i = 0; i < bookMarks.length; i++) {
    cartona += `
      <tr>
        <td>${i + 1}</td>
        <td>${bookMarks[i].name}</td>
        <td><a href="${bookMarks[i].link}" target="_blank"><button class="btn-visit"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
        <td><button class="btn-delete" onclick="deleteBookmark(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
      </tr>
    `;
  }
  tableContent.innerHTML = cartona;
}

function deleteBookmark(index) {
  bookMarks.splice(index, 1);
  displayBookmarks();
}

function validateName(name) {
  var pattern = /^[A-Za-z0-9 ]{3,}$/; 
  return pattern.test(name);
}

function validateURL(url) {
  var pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;
  return pattern.test(url);
}

function clearInputs() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
  siteNameInput.classList.remove("is-valid", "is-invalid");
  siteUrlInput.classList.remove("is-valid", "is-invalid");
}


siteNameInput.addEventListener("input", function () {
  if (validateName(siteNameInput.value)) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
  } else {
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");
  }
});

siteUrlInput.addEventListener("input", function () {
  if (validateURL(siteUrlInput.value)) {
    siteUrlInput.classList.add("is-valid");
    siteUrlInput.classList.remove("is-invalid");
  } else {
    siteUrlInput.classList.add("is-invalid");
    siteUrlInput.classList.remove("is-valid");
  }
});
