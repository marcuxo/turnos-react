
$(document).ready(function() {
  $('#datatable').dataTable({
    "paging":   false,
    "ordering": true,
    "info":     false,
    "order": [[ 9, "asc" ]],
});
});
// //datatable_filter