var numeroProductos = 6;

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
				document.getElementById('carritoCantidadProducto'+i).innerHTML=document.getElementById('cantidadArticulo'+i).value;
				document.getElementById('carritoPrecioFinalProducto'+i).innerHTML=(Number(document.getElementById('precioArticulo'+i).innerHTML)*Number(document.getElementById('cantidadArticulo'+i).value)).toFixed(2);

			} else {
				var crearTr=document.createElement('tr');
				var crearTd1=document.createElement('td');
				var crearTd2=document.createElement('td');
				var crearTd3=document.createElement('td');
				var crearTd4=document.createElement('td');
				
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
			}

		}
		
	}
	var precioTotalCarritoActual = 0;
	for(x=1;x<numeroProductos;x++){
		if(document.getElementById('carritoPrecioFinalProducto'+x)){
			var precioTotalASumar = Number(document.getElementById('carritoPrecioFinalProducto'+x).innerHTML);
			precioTotalCarritoActual+=precioTotalASumar;
		document.getElementById('precioTotalCarrito').innerHTML = precioTotalCarritoActual.toFixed(2);
		}
	}

}


