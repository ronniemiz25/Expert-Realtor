

// backto-top btn script
		var btn = jQuery('#backto-top');
		jQuery(window).scroll(function() {
		  if (jQuery(window).scrollTop() > 300) {
		    btn.addClass('show');
		  } else {
		    btn.removeClass('show');
		  }
		});

		btn.on('click', function(e) {
		  e.preventDefault();
		  jQuery('html, body').animate({scrollTop:0}, '1000');
		});
	// backto-top btn script end

 
		jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
			theme: 'light',
			breakpoint: 991,
			position: 'right',
			});

			jQuery("#navbar_top").scrollToFixed();

			$(window).scroll(function () {
				if ($(window).scrollTop() <= 40) {
					//alert();
					$(".menumain").removeClass("scroll_navbar");
				}
				else {
					$(".menumain").addClass("scroll_navbar");
				}
			});


		});


	// MULTIPLE CHECKBOX FUNCTION
		$(document).ready(function () {
            // Initially hide all table headers and columns apart from Emami Aastha and Dream Diamond
            $('table thead th:gt(2)').hide(); // Hide headers starting from the third column
            $('table tbody tr').each(function () {
                $(this).children('td:gt(1)').hide(); // Hide columns starting from the third column
            });

            // Function to toggle visibility of table columns
            function toggleColumns() {
                // Hide all columns and headers apart from Emami Aastha and Dream Diamond
                $('table thead th:gt(2)').hide();
                $('table tbody tr').each(function () {
                    $(this).children('td:gt(1)').hide();
                });

                // Get all checked checkboxes
                const checkedCheckboxes = $('.form-check-input:checked').not('#flexCheckChecked, #flexCheckChecked2');

                // Check if more than 2 checkboxes are selected
                if (checkedCheckboxes.length > 2) {
                    alert('You can select a maximum of 2 options.');
                    checkedCheckboxes.last().prop('checked', false); // Uncheck the last checked checkbox
                    return;
                }

                // Show corresponding columns for checked checkboxes
                checkedCheckboxes.each(function () {
                    const columnIndex = $('.form-check-input').index(this) - 2; // Calculate column index (offset by 2 for Emami Aastha and Dream Diamond)
                    $('table thead th').eq(columnIndex + 3).show(); // Show the corresponding header
                    $('table tbody tr').each(function () {
                        $(this).children(`td:eq(${columnIndex + 2})`).show(); // Show the corresponding column
                    });
                });
            }

            // Attach change event listener to checkboxes
            $('.form-check-input').not('#flexCheckChecked, #flexCheckChecked2').on('change', toggleColumns);

            // Initialize table state
            toggleColumns();
        });
	// MULTIPLE CHECKBOX FUNCTION













