import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone server bundle for the Node Docker image (see node.Dockerfile).
  output: "standalone",
  // React Compiler: auto-memoization, no manual useMemo/useCallback needed.
  reactCompiler: true,
};

export default nextConfig;
