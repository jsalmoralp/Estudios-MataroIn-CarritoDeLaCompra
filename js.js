var numeroProductos = 6; //Hay que sumarle +1.

function sumarCantidad(posicion){
	var valor;
	for(i=1;i<numeroProductos;i++){
		if(posicion==i){
			valor=Number(document.getElementById('cantidadArticulo'+i).value);
			valor++;
			document.getElementById('cantidadArticulo'+i).value=valor;
		}
	}
}

function restarCantidad(posicion){
	var valor;
	for(i=1;i<numeroProductos;i++){
		if(posicion==i){
			valor=Number(document.getElementById('cantidadArticulo'+i).value);
			if(valor>0){
				valor--;
				document.getElementById('cantidadArticulo'+i).value=valor;
			}
		}
	}
}

function incluirCesta(posicion){ 

	for(i=1;i<numeroProductos;i++){
		if(posicion==i){
			var carrito=document.getElementById('carrito');
			if(document.getElementById('carritoTr'+i)){
				document.getElementById('carritoTr'+i).style.display = '';
				document.getElementById('carritoCantidadProducto'+i).innerHTML=document.getElementById('cantidadArticulo'+i).value;
				document.getElementById('carritoPrecioFinalProducto'+i).innerHTML=(Number(document.getElementById('precioArticulo'+i).innerHTML)*Number(document.getElementById('cantidadArticulo'+i).value)).toFixed(2);
				if (Number(document.getElementById('carritoCantidadProducto'+i).innerHTML)==0){
					document.getElementById('carritoTr'+i).style.display = 'none';
				}
			} else {
				var crearTr=document.createElement('tr');
				var crearTd1=document.createElement('td');
				var crearTd2=document.createElement('td');
				var crearTd3=document.createElement('td');
				var crearTd4=document.createElement('td');
				var crearTd5=document.createElement('td');
				
				crearTr.setAttribute('id', 'carritoTr'+i);
				carrito.appendChild(crearTr);
				
				var carritoTr=document.getElementById('carritoTr'+i);

				crearTd1.setAttribute('id', 'carritoTituloProducto'+i);
				carritoTr.appendChild(crearTd1);
				var nombreArticulo=document.createTextNode(document.getElementById('tituloArticulo'+i).innerHTML);
				document.getElementById('carritoTituloProducto'+i).appendChild(nombreArticulo);

				crearTd2.setAttribute('id', 'carritoPrecioProducto'+i);
				carritoTr.appendChild(crearTd2);
				var precioArticulo=document.createTextNode(document.getElementById('precioArticulo'+i).innerHTML);
				document.getElementById('carritoPrecioProducto'+i).appendChild(precioArticulo);

				crearTd3.setAttribute('id', 'carritoCantidadProducto'+i);
				carritoTr.appendChild(crearTd3);
				var cantidadArticulo=document.createTextNode(document.getElementById('cantidadArticulo'+i).value);
				document.getElementById('carritoCantidadProducto'+i).appendChild(cantidadArticulo);

				crearTd4.setAttribute('id', 'carritoPrecioFinalProducto'+i);
				carritoTr.appendChild(crearTd4);
				var precioFinalArticulo = document.createTextNode((Number(document.getElementById('precioArticulo'+i).innerHTML)*Number(document.getElementById('cantidadArticulo'+i).value)).toFixed(2));
				document.getElementById('carritoPrecioFinalProducto'+i).appendChild(precioFinalArticulo);

				crearTd5.setAttribute('id', 'carritoAccionProducto'+i);
				carritoTr.appendChild(crearTd5);
				var crearTd5Span=document.createElement('span');
				crearTd5Span.setAttribute('class', 'btn btn-warning');
				crearTd5Span.setAttribute('onclick', 'borrarElementoCarrito('+i+')');
				var crearTd5SpanSpan=document.createElement('span');
				crearTd5SpanSpan.setAttribute('class', 'glyphicon glyphicon-trash');
				document.getElementById('carritoAccionProducto'+i).appendChild(crearTd5Span);
				crearTd5Span.appendChild(crearTd5SpanSpan);
			}

		}
		
	}
	mostrar_precioTotalCarrito();
}

function borrarCarrito(){
	for(x=1;x<numeroProductos;x++){
		if(document.getElementById('carritoTr'+x) && document.getElementById('carritoTr'+x).style.display != 'none'){
			document.getElementById('carritoTr'+x).style.display = "none";
		}
	}
	mostrar_precioTotalCarrito();
}
function borrarElementoCarrito(elemento){
	document.getElementById('carritoTr'+elemento).style.display = "none";
	mostrar_precioTotalCarrito();
}

function mostrar_precioTotalCarrito(){
	var precioTotalCarritoActual = 0;
	for(x=0;x<numeroProductos;x++){
		if (x==0){
			document.getElementById('precioTotalCarrito').innerHTML = 0;
			continue;
		}
		if(document.getElementById('carritoPrecioFinalProducto'+x) && document.getElementById('carritoTr'+x).style.display != 'none'){
			var precioTotalASumar = Number(document.getElementById('carritoPrecioFinalProducto'+x).innerHTML);
			precioTotalCarritoActual+=precioTotalASumar;
			document.getElementById('precioTotalCarrito').innerHTML = precioTotalCarritoActual.toFixed(2);
		}
	}
}
