exports.load = function(elems) {
  var politeLoadElems = document.querySelectorAll( elems );

  for ( var i = 0, length = politeLoadElems.length; i < length; i++ ) {

    var elm = politeLoadElems[i],
    dataSrc = politeLoadElems[i].getAttribute( 'data-src' );
    
    elm.setAttribute( 'src', dataSrc );
  }
}