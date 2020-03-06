(function($) {
  let model = {
    'tutorialList': [],
    'discordList': [],
    'streamList': [],
    'youtubeChannelList': [],
    'usefulLinkList': []
  };
  $.get("https://deliver.kontent.ai/9ad0f658-8336-00dc-a609-9651ec2d0447/items", function(data) {
    $.each(data.items, function(index, item) {
      let name = item.system.codename;
      if (name.includes('tutorial_')) {
        model.tutorialList.push(item.elements);
      } else if (name.includes('stream_')) {
        model.streamList.push(item.elements);
      } else if (name.includes('useful_link_')) {
        model.usefulLinkList.push(item.elements);
      } else if (name.includes('discord_')) {
        model.discordList.push(item.elements);
      } else if (name.includes('youtube_channel_')) {
        model.youtubeChannelList.push(item.elements);
      } else {
        model[name] = item.elements;
      }
    });
  }).done(function () {
    ko.applyBindings(model);
    window.dispatchEvent(new Event('data-ready'));
  });
})(jQuery);
