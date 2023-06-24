uniform vec3 color;
uniform sampler2D pointTexture;
varying vec3 vColor;

void main() {
  vec4 textureColor = texture2D(pointTexture, gl_PointCoord);
  vec4 finalColor = vec4(color * vColor, 1.0);
  gl_FragColor = finalColor * textureColor;
}
