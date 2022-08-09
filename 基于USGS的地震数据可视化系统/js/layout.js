(function($){
	var initLayout = function() {
		
		var hash = window.location.hash.replace('#', '');
		var currentTab = $('ul.navigationTabs a')
							.bind('click', showTab)
							.filter('a[rel=' + hash + ']');
		if (currentTab.size() == 0) {
			currentTab = $('ul.navigationTabs a:first');
		}
		showTab.apply(currentTab.get(0));
		$('#colorpickerHolder').ColorPicker({flat: true});
		$('#colorpickerHolder2').ColorPicker({
			flat: true,
			color: '#00ff00',
			onSubmit: function(hsb, hex, rgb) {
				$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			}
		});
		$('#colorpickerHolder2>div').css('position', 'absolute');
		var widt = false;
		$('#colorSelector2').bind('click', function() {
			$('#colorpickerHolder2').stop().animate({height: widt ? 0 : 173}, 500);
			widt = !widt;
		});
		$('#colorpickerField1, #colorpickerField2, #colorpickerField3').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#colorpickerField1').css('backgroundColor', '#' + hex);
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})

		

		$('#rec1').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec1').css('fill', "rgb("+rgb.r+","+rgb.g+","+rgb.b+")");
				r[0]=rgb.r;
				g[0]=rgb.g;
				b[0]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})
		$('#rec2').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec2').css('fill', "rgb("+rgb.r+","+rgb.g+","+rgb.b+")");
				r[1]=rgb.r;
				g[1]=rgb.g;
				b[1]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})

		$('#rec3').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec3').css('fill', "rgb("+rgb.r+","+rgb.g+","+rgb.b+")");
				r[2]=rgb.r;
				g[2]=rgb.g;
				b[2]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})
		$('#rec4').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec4').css('fill', '#' + hex);
				r[3]=rgb.r;
				g[3]=rgb.g;
				b[3]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})

		$('#rec5').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec5').css('fill', '#' + hex);
				r[4]=rgb.r;
				g[4]=rgb.g;
				b[4]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})
		$('#rec6').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec6').css('fill', '#' + hex);
				r[5]=rgb.r;
				g[5]=rgb.g;
				b[5]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})
		$('#rec7').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec5').css('fill', '#' + hex);
				r[6]=rgb.r;
				g[6]=rgb.g;
				b[6]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})
		$('#rec8').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec6').css('fill', '#' + hex);
				r[7]=rgb.r;
				g[7]=rgb.g;
				b[7]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})
		$('#rec9').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
				$('#rec6').css('fill', '#' + hex);
				r[8]=rgb.r;
				g[8]=rgb.g;
				b[8]=rgb.b;
			},
			/*onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			}*/
		})




		.bind('keyup', function(){
			$(this).ColorPickerSetColor(this.value);
		});
		$('#colorSelector').ColorPicker({
			color: '#0000ff',


			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#colorSelector div').css('backgroundColor', '#' + hex);
			}
		});
		$('#colorSelector1').ColorPicker({
			color: '#0000ff',


			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#colorSelector1 div').css('backgroundColor', '#' + hex);
			}
		});
	};
	
	var showTab = function(e) {
		var tabIndex = $('ul.navigationTabs a')
							.removeClass('active')
							.index(this);
		$(this)
			.addClass('active')
			.blur();
		$('div.tab')
			.hide()
				.eq(tabIndex)
				.show();
	};
	
	EYE.register(initLayout, 'init');
})(jQuery)