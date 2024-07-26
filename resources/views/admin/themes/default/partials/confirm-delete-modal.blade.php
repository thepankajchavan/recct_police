<!-- Confirm Delete modal -->
<div class="modal fade" id="deleteModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ __('common.destroy_confirm') }}</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>{{ __('common.destroy_confirm_message') }}.</p>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" id="cancelDeleteModalButton" data-dismiss="modal">{{ __('common.cancel') }}</button>
                <button type="button" class="btn btn-danger" id="confirmDeleteModalButton">{{ __('common.confirm') }}</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /Confirm Delete modal -->

@push('additional_scripts')
    <script>
        // Confirm Delete Modal Action
        $(document).on('click',  '.confirmDelete', function(event){
            const modal = $('#deleteModal');
            modal.modal('show');
            let form = $(this).closest('form');
            const confirmButton = document.getElementById('confirmDeleteModalButton');
            confirmButton.onclick = function(){
                modal.off('click');
                modal.keyboard = false;
                this.disabled = true;
                document.getElementById('cancelDeleteModalButton').disabled = true;
                this.innerHTML = `{{ __('common.processing') }}... <i class="fa fa-spinner fa-spin"></i>`;
                form.submit();
            };
        });
    </script>
@endpush
