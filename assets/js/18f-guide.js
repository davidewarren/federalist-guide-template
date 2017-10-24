$(function() {
  $('.sidebar-nav').each(function() {
    accordion($(this));
  });

  // This list should match
  //
  //   https://github.com/18F/handbook/blob/master/javascripts/application.js
  //
  // Usage info:
  //
  //   https://github.com/18F/private-eye#usage
  //
  PrivateEye({
    defaultMessage: "This link is private to 18F.",
    ignoreUrls: [
      '18f.slack.com',
      'anywhere.gsa.gov',
      'bookit.gsa.gov',
      'calendar.gsa.gov',
      'connect.gsa.gov',
      'docs.google.com',
      'drive.google.com',
      'ea.gsa.gov',
      'email.gsa.gov',
      'gcims.gsa.gov',
      'github.com/18F/Accessibility_Reviews',
      'github.com/18F/blog-drafts',
      'github.com/18F/codereviews',
      'github.com/18F/DevOps',
      'github.com/18F/Infrastructure',
      'github.com/18F/security-incidents',
      'github.com/18F/staffing-and-resources',
      'github.com/18F/team-api.18f.gov',
      'github.com/18F/writing-lab',
      'gkey.gsa.gov',
      'gsa-tts.slack.com',
      'gsa.my.salesforce.com',
      'gsaolu.gsa.gov',
      'hrprod.hr.gsa.gov',
      'insite.gsa.gov',
      'mail.gsa.gov',
      'meet.gsa.gov',
      'pages-internal.18f.gov',
      'tock.18f.gov'
    ]
  });
});
