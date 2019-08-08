$(document).ready(function () {
  // var readMore = {
  // 	attach: function () {
  // 		this.initialize('.about-us__description p', 7, 'Читати далі...', 'Згорнути', '140px', '1000px');
  // 		this.initialize('.location__text', 5, 'Читати далі...', 'Згорнути', '140px', '1000px');
  // 	},
  // 	initialize: function (el, lines, readMore, readLess, minHeight, maxHeight) {
  // 		$(el).trunk8({
  // 			lines: lines,
  // 			fill: '&hellip; <div id="read-more" class="read-more"><span>' + readMore + '</span></div>'
  // 		});

  // 		$(document).on('click', '#read-more', function (event) {
  // 			$(this).parent().trunk8('revert').append('<div id="read-less" class="read-more read-less"><span>' + readLess + '</span></div>');
  // 			$(el).css('max-height', maxHeight);
  // 			return false;
  // 		});

  // 		$(document).on('click', '#read-less', function (event) {
  // 			var $this = $(this);
  // 			$(el).css('max-height', minHeight);
  // 			setTimeout(function () {
  // 				$this.parent().trunk8();
  // 				return false;
  // 			}, 500);
  // 		});
  // 	}
  // };

  var moreDetails = {
    attach: function () {
      this.action('.possibilities__project .button', '.possibilities__project .buttons', '.possibilities__project');
    },
    action: function (el, parent, wrapper) {
      $(el).click(function () {
        $(this).closest(parent).find('.more').toggleClass('active');
        $(this).closest(parent).find('.less').toggleClass('active');
        $(this).closest(wrapper).toggleClass('open');
      })
    }
  };

  // var alllocation = {
  // 	attach: function () {
  // 		// location block
  // 		this.callModal('#location .all-location', '#location', '#location .location__description img', 'Усі <span>партнери</span>', 'location-modal');
  // 		this.removeModal('#location-modal .close, #location-modal-overlay', '#location-modal');
  // 		this.moveSlide('#location-modal .logo-wrapper', 4, 1);

  // 		// location block
  // 		this.callModal('#possibilities .all-possibilities', '#possibilities', '#possibilities img', 'Усі <span>проекти</span>', 'possibilities-modal');
  // 		this.removeModal('#possibilities-modal .close, #possibilities-modal-overlay', '#possibilities-modal');
  // 		this.moveSlide('#possibilities-modal .logo-wrapper', 5, 2);
  // 	},
  // 	fetchItems: function (el) {
  // 		return $(el).clone();
  // 	},
  // 	createModal: function (place, id) {
  // 		var htmlMarkup = '<div class=\"modal ' + id + '\" id=' + id + '></div>' +
  // 			'<div class=' + id + '-overlay id=' + id + '-overlay><div class="close"></div></div>';
  // 		$(place).append(htmlMarkup);
  // 	},
  // 	hideModal: function (elToHide) {
  // 		$(elToHide).removeClass('opened');
  // 	},
  // 	removeModal: function (el, elToHide) {
  // 		var self = this;

  // 		$(document).on('click', el, function (event) {
  // 			event.preventDefault();
  // 			self.hideModal(elToHide);
  // 		});
  // 	},
  // 	callModal: function (elClick, generalWrapper, items, title, modalId) {
  // 		var self = this;
  // 		var $logos = self.fetchItems(items);
  // 		// var modalTitle = $(title).text();

  // 		$(document).on('click', elClick, function (event) {
  // 			event.preventDefault();

  // 			if (!$('#' + modalId).length) {
  // 				self.createModal(generalWrapper, modalId);
  // 				$('#' + modalId).append($logos);
  // 				$('#' + modalId).prepend('<div class="modal-title">' + title + '</div>');
  // 				$logos.wrap('<div class="logo-wrapper"><div class="logo"></div></div>');
  // 				setTimeout(function () {
  // 					$('#' + modalId).addClass('opened');
  // 					$('.modal-title').click();
  // 				}, 1);
  // 			} else {
  // 				$('#' + modalId).addClass('opened');
  // 			}
  // 		});
  // 	},
  // 	moveSlide: function (item, sectionNumber, count) {
  // 		var self = this;

  // 		$(document).on('click', item, function (event) {
  // 			event.preventDefault();
  // 			var $this = $(this);
  // 			var modal = $this.closest('.modal').attr('id');
  // 			var itemIndex = $this.index();

  // 			if (count == 2 && itemIndex % 2) {
  // 				itemIndex = (itemIndex + 1) / 2;
  // 			} else if (count == 2 && !(itemIndex % 2)) {
  // 				itemIndex = itemIndex / 2;
  // 			}

  // 			self.hideModal('#' + modal);
  // 			$.fn.fullpage.moveTo(sectionNumber, itemIndex - 1);
  // 		});
  // 	}
  // };

  var fullPage = {
    attach: function () {
      $('#fullpage').fullpage({
        fitToSection: true,
        css3: true,
        showActiveTooltip: true,
        autoScrolling: true,
        normalScrollElements: '.location__text, .possibilities-modal, .location-modal, .possibilities-modal-overlay, .location-modal-overlay, .preloader-wrapper, .header__menu, .project__video-overlay, .project__video',
        anchors: ['firstSection', 'videoSection', 'secondSection', 'otherSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection'],
        menu: '#myMenu',
        responsiveWidth: 1200,
        scrollingSpeed: 1100,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Головна', '', 'Можливості', '', 'Реєстрація', 'Програма', 'Локація', 'Приєднатися'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        scrollBar: false,
        lazyLoading: true,
        // fixedElements: '#my-menu',
        afterLoad: function (element, anchorLink, nextIndex) {
          // var section = $(this);
          // section[0].getAttribute('data-anchor');
          menuItems.forEach(function (item) {
            if (item.dataset.menuanchor == element) {
              item.firstChild.classList.add('active');
            }
          });

        },
        onLeave: function (index, nextIndex, direction) {
          var leavingSection = $(this);
          var anchor = leavingSection.get(0).dataset.anchor;
          menuItems.forEach(function (item) {
            if (item.dataset.menuanchor == anchor) {
              item.firstChild.classList.remove('active');
            }
          });


          if (index == 4 && direction == 'down' || index == 6 && direction == 'up') {
            $('.about-us h2').addClass('bounce animated');
          }

          // program section index=6
          if (index == 5) {
            $('.about-us h2').removeClass('bounce animated');
          }

          if (index == 5 && direction == 'down' || index == 7 && direction == 'up') {
            $('.about-us h2').addClass('bounce animated');
          }

          if (index == 5 && direction == 'down' || index == 7 && direction == 'up') {
            $('.col.photo').addClass('animated');
          }

          if (index == 1 && direction == 'down') {
            $('.col.photo').addClass('animated');
          }

          if (index == 2 && direction == 'down') {
            $('.col.photo').removeClass('animated');
          }

          if (index == 6) {
            $('.col.photo').removeClass('animated');
          }

          if (index == 6) {
            $('.about-us h2').removeClass('bounce animated');
          }

          // location section index=7
          if (index == 1 && direction == 'down') {
            $('.location__wrapper').addClass('animated');
          }

          if (index == 6 && direction == 'down') {
            $('.location__wrapper').addClass('animated');
          }

          if (index == 7) {
            $('.location__wrapper').removeClass('animated');
          }

          if (index == 8 && direction == 'up') {
            $('.location__wrapper').addClass('animated');
          }
        },

      });

      $(document).on('click', '.down', function (event) {
        $.fn.fullpage.moveSectionDown();
      });

      $(document).on('click', '.join', function (event) {
        $.fn.fullpage.moveTo(8);
      });

      $(document).on('click', '.up', function (event) {
        $.fn.fullpage.moveSectionUp();
      });
    }
  };

  var preloader = {
    attach: function () {
      // var preloaderWrapper = document.getElementById('page-preloader');
      // var preloader = preloaderWrapper.querySelector('.preloader');
      // var bar = new ProgressBar.Circle(container, {
      // 	color: '#fff000',
      // 	strokeWidth: 4,
      // 	trailWidth: 1,
      // 	easing: 'easeInOut',
      // 	duration: 3500,
      // 	text: {
      // 		autoStyleContainer: false
      // 	},
      // 	from: {
      // 		color: '#777',
      // 		width: 1
      // 	},
      // 	to: {
      // 		color: '#fff000',
      // 		width: 2
      // 	},
      // 	step: function (state, circle) {
      // 		circle.path.setAttribute('stroke', state.color);
      // 		circle.path.setAttribute('stroke-width', state.width);
      // 		var value = Math.round(circle.value() * 100);
      // 		if (value === 0) {
      // 			circle.setText('');
      // 		} else {
      // 			circle.setText(value + '%');
      // 		}
      // 	}
      // });
      // bar.text.style.fontSize = '24px';
      // bar.animate(1.0);

      setTimeout(function () {
        // $('.preloader-wrapper').addClass('opacity');
        $('.header__logo').addClass('fadeIn animated');
        $('.header__logo-2').addClass('fadeIn animated');
        $('.header__language').addClass('fadeIn animated');
        $('.main h1').addClass('bounceInLeft animated');
        $('.main .join').addClass('bounceInLeft animated');
        $('.main-description').addClass('bounceInLeft animated');
        $('.main .socials-wrapper').addClass('fadeIn animated');
      }, 3000);

      // setTimeout(function () {
      //   $('.preloader-wrapper').css('display', 'none');
      // }, 7000);
    }
  };

  var headMenu = {
    attach: function () {
      // var menu = document.getElementById('my-menu');
      // menu.style.position = 'absolute';
      // var videoInfoBlock = ducument.getElementById('video-info-block');
      // videoInfoBlock.append(menu);

      $('.header__menu a').click(function () {
        $('.burger').prop("checked", false);
      })
    }
  };

  // var projectVideo = {
  // 	attach: function () {
  // 		this.video('.possibilities__project .watch', '.possibilities__project', '.prolect__video');
  // 		this.close('.project__video-overlay, .project__video .close', '.project__video.opened');
  // 	},
  // 	video: function (btn, parent, modal) {
  // 		$(btn).click(function () {
  // 			var contentToShow = '[name="' + $(this).closest(parent).attr('id') + '"]';
  // 			$(contentToShow).addClass('opened');
  // 		})
  // 	},
  // 	close: function (el, elToHide) {
  // 		$(el).click(function () {
  // 			var myString = $(elToHide).attr('name');
  // 			var stringLength = myString.length;
  // 			var index = myString.charAt(stringLength - 1) - 1;
  // 			$(elToHide).removeClass('opened');
  // 			$('.project__video iframe')[index].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  // 		});
  // 	}
  // }

  // readMore.attach();
  moreDetails.attach();
  // alllocation.attach();
  preloader.attach();
  fullPage.attach();
  headMenu.attach();
  // projectVideo.attach();
  $('.callback-sub').submit(function (e) {
    e.preventDefault();
    var $form = $(this);

    if (validateCallbeck()) {
      var dataObj = {};
      var formData = $form.serializeArray();
      $(formData).each(function (i, field) {
        dataObj[field.name] = field.value;
      });

      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/wp-admin/admin-ajax.php',
        data: {
          'action': 'send_callback_action',
          'formData': dataObj
        },
        success: function (data) {
          $("#senk-modal-overlay").fadeIn(400);
          $("#senk-modal").fadeIn(400);
          $form[0].reset();
        }
      });
    }
  });

  $('.callback-email').submit(function (e) {
    e.preventDefault();
    var $form = $(this);

    if (validateCallbeckEmail()) {
      var dataObj = {};
      var formData = $form.serializeArray();
      $(formData).each(function (i, field) {
        dataObj[field.name] = field.value;
      });

      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/wp-admin/admin-ajax.php',
        data: {
          'action': 'send_callback_email_action',
          'formData': dataObj
        },
        success: function (data) {
          $(".success-form-callback").fadeIn(400);
          $form[0].reset();
          setTimeout(function () {
            $(".success-form-callback").fadeOut(400);
          }, 2000);
        }
      });
    }
  });

  $("#senk-modal-overlay").click(function (e) {
    e.preventDefault();
    $("#senk-modal-overlay").fadeOut(400);
    $("#senk-modal").fadeOut(400);
  })


});

function validateCallbeck() {
  var form = $('.callback-sub');
  if (form.find('[name=nameOrg]').val() == '') {
    form.find('[name=nameOrg]').css('border-color', 'red');
    return false;
  } else {
    form.find('[name=nameOrg]').css('border-color', 'rgba(0, 0, 0, 0.1)');
  }

  if (form.find('[name=namePeapl]').val() == '') {
    form.find('[name=namePeapl]').css('border-color', 'red');
    return false;
  } else {
    form.find('[name=namePeapl]').css('border-color', 'rgba(0, 0, 0, 0.1)');
  }

  var phone = form.find('[name=phone]').val();
  var re = /^\d[\d\(\)\ -]{8,14}\d$/;
  var valid = re.test(phone);
  if (valid) {
    form.find('[name=phone]').css('border-color', 'rgba(0, 0, 0, 0.1)');
  } else {
    form.find('[name=phone]').css('border-color', 'red');
    return false;
  }

  var email = form.find('[name=email]').val();
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var valid_ = re.test(email);
  if (valid_) {
    form.find('[name=email]').css('border-color', 'rgba(0, 0, 0, 0.1)');
  } else {
    form.find('[name=email]').css('border-color', 'red');
    return false;
  }

  return true;
}

function validateCallbeckEmail() {
  var form = $('.callback-email');

  var email = form.find('[name=email]').val();
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var valid_ = re.test(email);
  if (valid_) {
    form.find('[name=email]').css('border-color', 'rgba(0, 0, 0, 0.1)');
  } else {
    form.find('[name=email]').css('border-color', 'red');
    return false;
  }

  return true;
}

$(document).ready(function () {

  var classNotFull = 'fp-auto-height';
  var firstScreen = document.querySelector('#main-block');

  function handleFullPageToggle() {
    if (window.innerWidth <= 850) {

      window.mainMenuParent.appendChild(window.mainMenu);
      if (!firstScreen.classList.contains(classNotFull)) {
        firstScreen.classList.add(classNotFull)
      }
    } else {
      if (firstScreen.classList.contains(classNotFull)) {
        firstScreen.classList.remove(classNotFull)
      }
      document.body.appendChild(mainMenu);
    }
  }

  handleFullPageToggle();
  window.addEventListener('resize', function () {
    handleFullPageToggle();
  })


  var videoPlaceholder = document.querySelector('.video-info-placeholder');
  var onVideoPlaceholderClick = function (evt) {
    videoPlaceholder.style.display = 'none';

    // var embedVideo = document.getElementById('embed-video');
    // var innerDoc = embedVideo.contentDocument || embedVideo.contentWindow.document;
    // console.log(innerDoc);
    // var event = new Event("click");
    // embedVideo.dispatchEvent(event);
  }
  videoPlaceholder.addEventListener('click', onVideoPlaceholderClick);
});
