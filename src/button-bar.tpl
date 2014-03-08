<div class="topcoat-button-bar">
  <% _.forEach(buttons, function(button) { %>
  <div class="topcoat-button-bar__item">
    <button class="topcoat-button"><%= button.label %></button>
  </div>
  <% }); %>
</div>
