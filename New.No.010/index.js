let num = 0;

function change() {
  document.getElementById("change").innerHTML = `<img src="baseball${
    ++num % 3
  }.svg" alt="change" />`;
}

function fileUploadCheck(_name) {
  let fileLength = _name.length;
  let fileDot = _name.lastIndexOf(".");
  let fileType = _name.substring(fileDot + 1, fileLength).toLowercase();
  return fileType;
}
