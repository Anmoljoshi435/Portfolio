import { useId } from 'react'
import type { ProjectArchitecture } from '../data/portfolio'

const nodeWidth = 156
const nodeHeight = 58

function getConnector(source: ProjectArchitecture['nodes'][number], target: ProjectArchitecture['nodes'][number]) {
  const dx = target.x - source.x
  const dy = target.y - source.y
  const scale = 1 / Math.max(Math.abs(dx) / (nodeWidth / 2), Math.abs(dy) / (nodeHeight / 2))

  return {
    x1: source.x + dx * scale,
    y1: source.y + dy * scale,
    x2: target.x - dx * scale,
    y2: target.y - dy * scale,
  }
}

type ArchitectureGraphProps = {
  architecture: ProjectArchitecture
  projectName: string
  heading?: string
  caption?: string
}

export function ArchitectureGraph({
  architecture,
  projectName,
  heading = 'SYSTEM ARCHITECTURE GRAPH',
  caption = 'A high-level view of how the main components interact.',
}: ArchitectureGraphProps) {
  const markerId = `architecture-arrow-${useId().replaceAll(':', '')}`

  return (
    <div className="architecture-graph">
      <div className="graph-heading">
        <span className="mini-label">{heading}</span>
        <span className="graph-legend"><span /> COMPONENT FLOW</span>
      </div>
      <div className="graph-scroll">
        <svg
          className="graph-canvas"
          viewBox="0 0 760 220"
          role="img"
          aria-label={`${projectName} ${heading.toLowerCase()}`}
        >
          <defs>
            <marker id={markerId} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0 0L8 4L0 8Z" />
            </marker>
          </defs>
          <g className="graph-connections">
            {architecture.edges.map((edge) => {
              const source = architecture.nodes.find((node) => node.id === edge.from)
              const target = architecture.nodes.find((node) => node.id === edge.to)
              if (!source || !target) {
                throw new Error(`Architecture graph edge references an unknown node: ${edge.from} -> ${edge.to}`)
              }

              const connector = getConnector(source, target)
              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={connector.x1}
                  y1={connector.y1}
                  x2={connector.x2}
                  y2={connector.y2}
                  markerEnd={`url(#${markerId})`}
                />
              )
            })}
          </g>
          {architecture.nodes.map((node, index) => (
            <g className={`graph-node${index === architecture.nodes.length - 1 ? ' graph-node-output' : ''}`} key={node.id}>
              <rect
                x={node.x - nodeWidth / 2}
                y={node.y - nodeHeight / 2}
                width={nodeWidth}
                height={nodeHeight}
                rx="8"
              />
              <circle cx={node.x - nodeWidth / 2 + 13} cy={node.y} r="3" />
              <text className="graph-node-label" x={node.x - nodeWidth / 2 + 24} y={node.y - 3}>
                {node.label}
              </text>
              <text className="graph-node-detail" x={node.x - nodeWidth / 2 + 24} y={node.y + 13}>
                {node.detail}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="graph-caption">{caption}</p>
    </div>
  )
}
