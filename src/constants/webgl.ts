import { ShaderType } from '@/types/webgl';

export const SHADER_TYPE: Record<ShaderType, GLenum> = {
  [ShaderType.VertexShader]: WebGL2RenderingContext.VERTEX_SHADER,
  [ShaderType.FragmentShader]: WebGL2RenderingContext.FRAGMENT_SHADER,
};
