import React from 'react'

const Square = ({
  colorValue,
  hexValue,
}) => {

  /**
   * 
   * This is different from the tutorial video
   * kinda works but figured it'd be better than a button
   * that toggles between black/white for font color
   */
  const getTextColor = (hexBackgroundColor) => {
    if (!colorValue) return 'black'

    // Convert hex to RGB
    const hex = hexBackgroundColor.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Set text color based on brightness threshold
    const textColor = brightness > 128 ? 'black' : 'white';
  
    return textColor;
  };
  
  // Example usage
  // const backgroundHex = '#3498db';
  // const textColor = getTextColorBasedOnBackground(backgroundHex);
  // console.log(`Text color should be ${textColor} for background color ${backgroundHex}`);
  

  return (
    <section
      className='square'
      style={{ backgroundColor: colorValue }}
    >
      <p style={{color: getTextColor(colorValue)}}>
        {colorValue ? colorValue : 'No color value'}
      </p>
      <p style={{color: getTextColor(colorValue)}}>
        {hexValue ? hexValue : null}
      </p>
    </section>
  )
}

Square.defaultProps = {
  colorValue: 'default prop value'
}

export default Square