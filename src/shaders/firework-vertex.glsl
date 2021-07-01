#version 300 es

uniform int u_Mode;
uniform vec2 u_Res;
in vec4 a_Data;
out vec4 v_Color;

vec3 h2rgb(float h) {
  return clamp(abs(mod(h * 6.0 + vec3(0, 4, 2), 6.0) - 3.0) - 1.0, 0.0, 1.0);
}

void clear() {
  gl_Position = vec4(a_Data.xy, 0, 1);
  v_Color = vec4(0, 0, 0, a_Data.w);
}

void draw() {
  gl_Position = vec4(vec2(1, -1) * ((a_Data.xy / u_Res) * 2.0 - 1.0), 0, 1);
  v_Color = vec4(h2rgb(a_Data.z), a_Data.w);
}

void main() {
  if(u_Mode == 0)
    draw();
  else
    clear();
}
