// Q1 Live Search (jQuery AJAX)
$('#search').on('input', function () {
  let value = $(this).val();
  $('#loading').show();
  $.ajax({
    url: `/products?q=${value}`,
    method: 'GET',
    success: function (data) {
      $('#loading').hide();
      if (data.length === 0) {
        $('#results').html("No products found");
        return;
      }
      let html = data.map(p => `
        <div>
          <img src="${p.image}" width="50">
          <p>${p.name} - $${p.price}</p>
        </div>`).join('');
      $('#results').html(html);
    }
  });
});