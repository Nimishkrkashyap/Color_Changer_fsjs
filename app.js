const background = document.getElementById('canvas')

function changeColor() {
    // Generate the random value for color
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    // Store all random value in variable with rgb format
    const color = `rgb(${red},${green},${blue})`
    
    // Insert the random color value in html document
    background.style.backgroundColor = color;
}