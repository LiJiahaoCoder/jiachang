import { ShaderType } from '@/types/webgl';
import { SHADER_TYPE } from '@/constants/webgl';

const createShader = (gl: WebGL2RenderingContext, type: ShaderType) => {
  const shader = gl.createShader(SHADER_TYPE[type]);
  if (shader === null) {
    throw new Error('Failed to create shader');
  }

  return shader;
};

const createProgram = (gl: WebGL2RenderingContext) => {
  const program = gl.createProgram();
  if (program === null) {
    throw new Error('Failed to create program');
  }

  return program;
};

export const createWebGLProgram = (
  gl: WebGL2RenderingContext,
  options: {
    vertexShaderSource: string;
    fragmentShaderSource: string;
  }
) => {
  const { vertexShaderSource, fragmentShaderSource } = options;
  const vs = createShader(gl, ShaderType.VertexShader);
  const fs = createShader(gl, ShaderType.FragmentShader);

  gl.shaderSource(vs, vertexShaderSource);
  gl.shaderSource(fs, fragmentShaderSource);
  gl.compileShader(vs);
  gl.compileShader(fs);

  const program = createProgram(gl);
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  return program;
};

export const setWebGLProgram = (
  gl: WebGL2RenderingContext,
  program: WebGLProgram
) => {
  gl.useProgram(program);
};
