(function() {
    var submit = document.getElementById('submit-upload');
    var fileInput = document.getElementById('file-input');
    //var resultOutput = document.getElementById('result');
    var body = document.getElementById('content');

    submit.addEventListener('click', function() {
        if (fileInput.files.length > 0) {
            uploadFile(fileInput.files[0]);
        }
    });

    function uploadFile(file) {
        var xhr = new XMLHttpRequest();
        var formData = new FormData(); //May not be support in older browsers (https://developer.mozilla.org/en-US/docs/Web/API/FormData#Browser_compatibility)
        var url = 'upload';

        formData.append('file', file);
        xhr.open('POST', url, true);
        xhr.send(formData);

        xhr.onload = function() {
            //resultOutput.innerHTML = this.responseText;  //displays file metadata on upload form
            content.innerHTML = this.responseText; //clears upload form
        }
    }
}());