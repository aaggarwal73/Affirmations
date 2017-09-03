import './groups.html';
import './affirmations.html';

Template.groups.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  },
  tabData: function() {
    var tab = Template.instance().currentTab.get();
    console.log(tab);
    var gr = tab.innerHTML;

    var data = {
     "FFM": [
        {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
        {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      ],
      
    };

    return data[gr];
  }
});

Template.groups.events({
  'click .nav-pills li': function( event, template ) {
    var currentTab = $( event.target ).closest( "li" );

    currentTab.addClass( "active" );
    $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

    template.currentTab.set( currentTab.data( "template" ) );

  }
});