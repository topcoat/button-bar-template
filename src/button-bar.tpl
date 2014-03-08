<div class="<%= namespace %>-button-bar">
  <% _.forEach(buttons, function(button) { %>
  <div class="<%= namespace %>-button-bar__item">
    <button class="<%= namespace %>-button"><%= button.label %></button>
  </div>
  <% }); %>
</div>
