import './index.html';
import './groups.html';
import './profile.html';
import './affirmations.html';

Template.index.onCreated( function() {
  this.currentTab = new ReactiveVar( "profile" );
});

Template.index.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  },
  tabData: function() {
    var tab = Template.instance().currentTab.get();

    var data = {
      "profile": 
        { "name":"Cole", "email": "emai'@email.com"}
      ,
      "groups": [
        { "name": "FFM"},
        
      ],
      "affirmations":[
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"},
      {"content": "I like how we worked on this app and it finally go working really really late", "author": "Cole", "for": "Aman"},
      {"content": "This app is A1", "author": "Cole", "for": "Aman"},
      {"content": "Let's see how long messages work. \n aaljsgjasgnklasgnajsdgnljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\nasjagsjnsagjagsjnagsnjgasjnsagnjsagdkjn", "author": "Cole", "for": "Aman"}
      
      ],
    };

    return data[ tab ];
  }
});

Template.index.events({
  'click .nav-pills li': function( event, template ) {
    var currentTab = $( event.target ).closest( "li" );

    currentTab.addClass( "active" );
    $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

    template.currentTab.set( currentTab.data( "template" ) );

  }
});