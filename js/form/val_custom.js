
  	$().ready(function() {
		// validate signup form on keyup and submit
		$("#drugform").validate({
			rules: {
				brand_name: "required",
				gene_name: "required",
				form: "required",
				basic_price: "required",
				packging: "required",
				paymentTerm: "required"
			},
			messages: {
				brand_name: "Please enter your Brand Name",
				gene_name: "Please enter your Generic Name",
				basic_price: "Please enter your Basic Price",
				packging: "Please enter your Packging",
				paymentTerm: "Please enter paymentTerm",
			}
		});

	});