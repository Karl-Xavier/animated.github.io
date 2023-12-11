$(function() {

    $('#order-button1').on('click', function() {
        $('#order-button1').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button2').on('click', function() {
        $('#order-button2').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button3').on('click', function() {
        $('#order-button3').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button4').on('click', function() {
        $('#order-button4').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button5').on('click', function() {
        $('#order-button5').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button6').on('click', function() {
        $('#order-button6').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button7').on('click', function() {
        $('#order-button7').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button8').on('click', function() {
        $('#order-button8').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button9').on('click', function() {
        $('#order-button9').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button10').on('click', function() {
        $('#order-button10').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button11').on('click', function() {
        $('#order-button11').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button12').on('click', function() {
        $('#order-button12').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button13').on('click', function() {
        $('#order-button13').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button14').on('click', function() {
        $('#order-button14').html('Added')
        $('.dropdown').show(300);
    })
  
    $('#order-button15').on('click', function() {
        $('#order-button15').html('Added')
        $('.dropdown').show(300);
    })
  
    $('.cancel-btn').on('click', function() {
        $('.dropdown').hide(300)
    })

    $('.cashout').on('click', function() {
        $('.dropdown2').show(300)
    })

    $('.cancel-btn2').on('click', function() {
        $('.dropdown2').hide(300)
    })

  
    alert("Your Cart is Below Your Page")
  
  
  // DARK-THEME //
    /*$('#toggle1').on('click', back)
    $('#toggle1').off('click')
  
    function back() {
      $('#toggle1').css({marginLeft: '30px', color: 'white'})
      $('#body').css({backgroundColor: 'white', color: 'black'})
      $('.next-a').css({color: 'black'})
      $('.cart-h2').css({color: 'black'})
      $('.header').css({backgroundColor: 'darkorange', color: 'white', boxShadow: '1px 1px 4px #000'})
      $('.toggle-container').css({backgroundColor: 'blue'})
    }
  
    function toggle(args) {
      var divToggle = document.querySelector('body');
      var upOne = document.getElementById('toggle-container')
      var downOne = document.getElementById('toggle1')
      divToggle.classList.toggle('background')
      upOne.classList.toggle('clone')
      downOne.classList.toggle('sub')
    }*/
  
  
  let isToggled = false
  
  $('#toggle1').on('click', slide)
  
  function slide() {
    isToggled = !isToggled
    slideToggle()
    toggleBackgroundColor()
    toggleTextColor()
    }
  
  function slideToggle() {
    const newPosition = isToggled ?
    '30px' : '0px'
    $('#toggle1').animate({marginLeft: newPosition}, 500)
    $('#toggle-container').css({backgroundColor: 'blue'})
    $('.scroll-h2').css({color: '#000'})
    $('.next-a').css({color: '#000'})
  }
  
  function toggleBackgroundColor() {
    const newColor = isToggled ? '#000' : '#fff'
    $('#body').css({backgroundColor: newColor})
  }
  
  function toggleTextColor() {
    const newCol = isToggled ? "#000" : "#000"
    $('.scroll-h2').css({color: '#fff'})
    $('.next-a').css({color: '#fff'})
  }
  
  /*$('#cart').on('click', drop)
  
  function drop() {
    $('#orders').show()
  }
  
  $('#orders-cancel').on('click', up)
  
  function up() {
    $('#orders').hide()
  }*/

})    

var current = 1;
var interval;

function startSlider() {
    interval = setInterval(function() {
     $('.slides').animate({'margin-left': '-=1235px'}, 1000, function() {
        current++;
            if (current === $('.slide').length) {
                current = 1;
                     $('.slides').css('margin-left', 0)
            }
        })   
    }, 4000)
}

function stopSlider() {
    clearInterval(interval);
}

