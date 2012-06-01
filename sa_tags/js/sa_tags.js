$(document).ready(function() {
  
  // edit.php
  $('#post-metak').addTagInput();

  $('#post-tags').addTagInput();
  
  
  // i8n gallery
  // This is for i18n gallery
  // requires inputs to have ids to work
  // edit.php line 233 
  // id="post-tag-<?php echo $i ?>"
  // or similar
  
  	$('input[name$=_tags]').each(function(index,element){
      $(this).attr("id", "tag_"+index);
      $(this).addClass('tagsinput');      
      $(this).addTagInput();
    });
      
});

// If tags not already defined define it here
// this lets us use i18n autocomplete tags for now
if(!tags) var tags = ['yellow','green','blue','red'];

// custom wrapper for tagsInput, it has a problem receiving objects directly from selectors
jQuery.fn.addTagInput = function(){
  
    $(this).tagsInput({
      width:'auto',
      height:'auto',
      minHeight:'auto',
      onChange: function(elem, elem_tags){
        $('.tag').each(function()
        {
          $(this).addClass('tag_'+$(this).text());
        });
      },        
      autocomplete_url:tags,      
      autocomplete:{
        minChars: 3,
        max: 50,
        scroll: true,
        // multiple: true,
        // multipleSeparator: ', ',
        matchContains:true,
        selectFirst:false,
        source:tags
      },
    });
    
}
