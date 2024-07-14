function upDate(previewPic) {

  console.log("Event triggered!");


  console.log("Image source:", previewPic.src);
  console.log("Image alt text:", previewPic.alt);


  const imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;


  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}


function unDo() {

  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = 'url("")';
  imageDiv.innerHTML = "Hover over an image below to display here.";
}


function addTabindex() {
  const previewImages = document.querySelectorAll('.preview');
  previewImages.forEach((img, index) => {
    img.setAttribute('tabindex', index + 1);
  });
}


document.querySelectorAll('.preview').forEach(img => {
  img.addEventListener('mouseover', function() {
    upDate(this);
  });
  img.addEventListener('mouseout', unDo);
  img.addEventListener('focus', function() {
    upDate(this);
  });
  img.addEventListener('blur', unDo);
  img.addEventListener('click', function() {
    showModal(this);
  });
});


window.addEventListener('load', addTabindex);


function showModal(previewPic) {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImg.src = previewPic.src;
  modalImg.alt = previewPic.alt;
}


const span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}


window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}