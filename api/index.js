import Konva from 'konva-node';

export async function get({params,query}) {

	let { text = 'Hello, Mundo!' } = params
	const color = `#${query.get('color') || '000'}`
	const bgColor = `#${ query.get('bg')|| 'fff' }`
	const aspect = query.get('aspect') || '1/2'
	const font = query.get('font') || 'arial'
	const padding = 50
	const width = 1200
	const height = {
		'16/9': 675,
		'4/3': 900,
		'1/2': 640,
		'1/1': 1200,
	}[aspect] || '640'

	text = text.replace(/\-/g,' ')

	var stage = new Konva.Stage({
	  width: width,
	  height: height,
	});
	var layer = new Konva.Layer();
	stage.add(layer);

	let fontSize = 100
	let textBox;

    while ( true  ) {
	    var textBoxTemp = new Konva.Text({
	        x: padding,
	        y: padding,
	        text: text,
	        fontSize: fontSize++,
	        fontFamily: font,
	        fill: color,
	        width: width - 2*padding,
	        align: 'center',
	    }); 

      	if ( textBoxTemp.height() > (height - 2*padding)) break;

  	  	textBox = textBoxTemp;
    };     

    var back = new Konva.Rect({
        x: 0,
        y: 0,
        fill: bgColor,
        width: width,
        height: height,
    });    

	layer.add(back).add(textBox).draw();

	const imgCanvas = stage.toCanvas()
	const img = imgCanvas.toBuffer('image/png', { quality: 0.5 })

	return {
		headers: { 'Content-type': 'image/png'},
		body: img
	};
}
