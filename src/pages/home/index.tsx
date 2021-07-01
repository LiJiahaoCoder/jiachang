import { useState, useRef, useEffect, useCallback } from 'react';
import { createWebGLProgram, setWebGLProgram } from '@/utils/webgl';
import fireworkVertexShaderSource from '@/shaders/firework-vertex.glsl';
import fireworkFragmentShaderSource from '@/shaders/firework-fragment.glsl';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gl, setGL] = useState<WebGL2RenderingContext | null>(null);
  const [, setProgram] = useState<WebGLProgram | null>(null);

  useEffect(() => {
    canvasRef.current!.width = window.innerWidth;
    canvasRef.current!.height = window.innerHeight;
    const _gl = canvasRef.current!.getContext('webgl2', {
      antialias: true,
      preserveDrawingBuffer: true,
    });
    setGL(_gl);
  }, []);

  useEffect(() => {
    if (gl === null) return;

    const _program = createWebGLProgram(gl, {
      vertexShaderSource: fireworkVertexShaderSource,
      fragmentShaderSource: fireworkFragmentShaderSource,
    });
    setWebGLProgram(gl, _program);

    const dataAttributeLocation = gl.getAttribLocation(_program, 'a_Data');
    const buffer = gl.createBuffer();
    gl.enableVertexAttribArray(dataAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(dataAttributeLocation, 4, gl.FLOAT, false, 0, 0);

    setProgram(_program);
  }, [gl]);

  const render = useCallback(() => {
    if (gl === null) return;

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }, [gl]);

  const animation = useCallback(() => {
    requestAnimationFrame(render);
  }, [render]);

  animation();

  return <canvas ref={canvasRef} id="canvas" />;
};

export default Home;
