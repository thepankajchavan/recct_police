@if(setting('default_editor') === 'summernote')
    @push('additional_styles')
        <!-- Summernote -->
        <link rel="stylesheet" href="{{ admin_assets('plugins/summernote/summernote-bs4.min.css') }}">
    @endpush
    @push('additional_scripts')
        <!-- Summernote -->
        <script src="{{ admin_assets('plugins/summernote/summernote-bs4.min.js') }}"></script>
        <script>
            //Summernote textarea
            $('.custom_wysiwyg').summernote({
                height: 300,
                toolbar: [
                    // [groupName, [list of button]]
                    ['paragraph', ['style']],
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['font', ['strikethrough', 'superscript', 'subscript']],
                    ['fontsize', ['fontsize']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']],
                    ['insert', ['table', 'hr', 'link', 'picture', 'video']],
                    ['misc', ['codeview', 'undo', 'redo']]
                ]
            });
            let imageUploadDiv = $('div.note-group-select-from-files');
            if (imageUploadDiv.length) {
                imageUploadDiv.remove();
            }
        </script>
    @endpush
@endif
@if(setting('default_editor') === 'tinymce')
    @push('additional_scripts')
        <!-- TinyMCE -->
        <script src="{{ admin_assets('plugins/tinymce/tinymce.min.js') }}"></script>
        <script>
            //TinyMCE textarea
            tinymce.init({
                selector:'.custom_wysiwyg',
                menubar: false,
                plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code insertdatetime media table help wordcount emoticons directionality',
                toolbar1: 'undo redo | fontselect | formatselect | ' +
                    ' bold italic underline forecolor backcolor | alignleft aligncenter ' +
                    ' alignright alignjustify ltr rtl',
                toolbar2: 'bullist numlist outdent indent |' +
                    ' removeformat | link | emoticons | hr | table | image media | codesample | code help preview',
            });
        </script>
    @endpush
@endif
