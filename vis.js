
var container = document.getElementById("array");
var btn1= document.getElementById("gen");
var btn2= document.getElementById("csort");
var btn3= document.getElementById("regenerate");

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function generatearray() {
  var arr = [];
  for (var i = 0; i < 20; i++) {
    arr.push(i + 1);
  }
  shuffle(arr);
  for (var i = 0; i < 20; i++) {
    var value = arr[i];
    var array_ele = document.createElement("div");

    array_ele.classList.add("block");
    array_ele.style.height = `${value * 13}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}
function update_array_size()
{
    generatearray();
}

async function InsertionSort(clsnam, delay = 600) {
  let blocks = document.getElementsByClassName(clsnam);
  blocks[0].style.backgroundColor = "rgb(49, 226, 13)";

  for (var i = 1; i < blocks.length; i += 1) {
    var j = i - 1;
    var key = parseInt(blocks[i].childNodes[0].innerHTML);
    var height = blocks[i].style.height;

    blocks[i].style.backgroundColor = "pink";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );
    while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {

      blocks[j].style.backgroundColor = "pink";
      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText = 
      blocks[j].childNodes[0].innerText;
      j = j - 1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      for (var k = i; k >= 0; k--) {
        blocks[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerHTML = key;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}

  async function CountingSort(delay = 250) {
  var blocks = document.querySelectorAll(".block");

  var block1 = 0,
    block2 = 0,
    block3 = 0,
    block4 = 0;
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";
    var value = Number(blocks[i].childNodes[0].innerHTML);
    var array_ele = document.createElement("div");

    array_ele.style.height = `${value * 13}px`;

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);

    if (value >= 1 && value <= 5) {
      array_ele.classList.add("firstbucket");
      var container = document.getElementById("one");
      array_ele.style.transform = 
      `translate(${block1 * 30}px)`;
      container.appendChild(array_ele);
      block1++;
    }
    if (value >= 6 && value <= 10) {
      array_ele.classList.add("secondbucket");
      var container = document.getElementById("two");
      array_ele.style.transform = 
      `translate(${block2 * 30}px)`;
      container.appendChild(array_ele);
      block2++;
    }
    if (value >= 11 && value <= 15) {
      array_ele.classList.add("thirdbucket");
      var container = document.getElementById("three");
      array_ele.style.transform = `translate(${block3 * 30}px)`;
      container.appendChild(array_ele);
      block3++;
    }
    if (value >= 16 && value <= 20) {
      array_ele.classList.add("fourthbucket");
      var container = document.getElementById("four");
      array_ele.style.transform = 
      `translate(${block4 * 30}px)`;
      container.appendChild(array_ele);
      block4++;
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    blocks[i].style.backgroundColor = "#6b5b95";
  }
  await InsertionSort("firstbucket");
  await InsertionSort("secondbucket");
  await InsertionSort("thirdbucket");
  await InsertionSort("fourthbucket");

  for (var i = 0; i < 4; i++) {
    var bucket_idx = 0;
    var block_idx;
    if (i == 0) block_idx =
    document.getElementsByClassName("firstbucket");
    if (i == 1) block_idx = 
    document.getElementsByClassName("secondbucket");
    if (i == 2) block_idx =
    document.getElementsByClassName("thirdbucket");
    if (i == 3) block_idx = 
    document.getElementsByClassName("fourthbucket");
    for (var j = i * 5; j < 5 * (i + 1); j++, bucket_idx++) {
      block_idx[bucket_idx].style.backgroundColor = "magenta";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      blocks[j].style.height = 
      block_idx[bucket_idx].style.height;
      blocks[j].childNodes[0].innerText =
        block_idx[bucket_idx].childNodes[0].innerText;
      blocks[j].style.backgroundColor = "magenta";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      block_idx[bucket_idx]
      .style.backgroundColor = "magenta";
    }
  }
}

 function countSort(){
  CountingSort();
}
 function re(){
  window.location.reload();
 }
