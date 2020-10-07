<script type="text/javascript">
  ecwidMessages = {
  "BuyNow.buy_now":"Add to registration"}; 
  
  // Initialize extra fields
	ec.order = ec.order || {};
	ec.order.extraFields = ec.order.extraFields || {};

	ec.order.extraFields.kid_name = {
    'title': 'What is your child\'s name?',
    'textPlaceholder': 'Child\'s name',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'customer_info'
};

ec.order.extraFields.teacher_name = {
    'title': 'Your child\'s music teacher?',
    'textPlaceholder': 'Name of teacher',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'customer_info'
};

ec.order.extraFields.teacher_email = {
    'title': 'Your child\'s music teacher\'s email?',
    'textPlaceholder': 'Email of teacher',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'customer_info'
};

Ecwid.refreshConfig();
  
</script>