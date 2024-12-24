const patterns = (color, opacity, strokeWidth, strokeColor) => [
  {
    id: 1,
    name: "Circles",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="circles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="10"
              cy="10"
              r="2"
              fill=${color}
              opacity=${opacity}
              strokeWidth=${strokeWidth}
              stroke=${strokeColor}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>
    `,
  },
  {
    id: 2,
    name: "Diagonals",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="diagonal-lines"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2"
              stroke=${strokeColor}
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
      </svg>
    `,
  },
  {
    id: 3,
    name: "Dots Grid",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="dots-grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill=${color} opacity=${opacity} />
            <circle cx="18" cy="18" r="1" fill=${color} opacity=${opacity} />
            <circle cx="18" cy="2" r="1" fill=${color} opacity=${opacity} />
            <circle cx="2" cy="18" r="1" fill=${color} opacity=${opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-grid)" />
      </svg>
    `,
  },
  {
    id: 4,
    name: "Diamonds",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="diamonds"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="6"
              y="6"
              width="12"
              height="12"
              transform="rotate(45 12 12)"
              stroke=${strokeColor}
              fill=${color}
              strokeWidth=${strokeWidth}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamonds)" />
      </svg>
    `,
  },
  {
    id: 5,
    name: "Plus",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="plus"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 5v10M5 10h10"
              stroke=${strokeColor}
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#plus)" />
      </svg>
    `,
  },
  {
    id: 6,
    name: "Horizontal Stripes",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="horizontal-stripes"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="20"
              height="10"
              fill=${color}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#horizontal-stripes)" />
      </svg>
    `,
  },
  {
    id: 7,
    name: "Vertical Stripes",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="vertical-stripes"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="10"
              height="20"
              fill=${color}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vertical-stripes)" />
      </svg>
    `,
  },
  {
    id: 8,
    name: "Zigzag",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="zigzag"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,10 l5,-5 l5,5 l5,-5 l5,5"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#zigzag)" />
      </svg>
    `,
  },
  {
    id: 9,
    name: "Crosshatch",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="crosshatch"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,0 l10,10 M10,0 l-10,10"
              stroke=${strokeColor}
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosshatch)" />
      </svg>
    `,
  },
  {
    id: 11,
    name: "Waves",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="waves"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,10 Q5,0 10,10 T20,10"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    `,
  },
  {
    id: 12,
    name: "Grid",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,0 L0,20 M0,0 L20,0"
              stroke=${strokeColor}
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    `,
  },
  {
    id: 13,
    name: "Stars",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="stars"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10,2 L12,8 L18,8 L14,12 L16,18 L10,14 L4,18 L6,12 L2,8 L8,8 Z"
              fill=${color}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stars)" />
      </svg>
    `,
  },
  {
    id: 14,
    name: "Chevrons",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="chevrons"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,10 L10,0 L20,10 M0,20 L10,10 L20,20"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chevrons)" />
      </svg>
    `,
  },
  {
    id: 15,
    name: "Triangles",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="triangles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="10,0 20,20 0,20"
              stroke=${strokeColor}
              fill=${color}
              strokeWidth=${strokeWidth}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangles)" />
      </svg>
    `,
  },
  {
    id: 16,
    name: "Concentric Circles",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="concentric-circles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="10"
              cy="10"
              r="5"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#concentric-circles)" />
      </svg>
    `,
  },
  {
    id: 18,
    name: "Arcs",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="arcs"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10,10 A10,10 0 0,1 20,20"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arcs)" />
      </svg>
    `,
  },
  {
    id: 20,
    name: "Wave Grid",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="wave-grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,10 Q5,0 10,10 T20,10"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
            <path
              d="M0,20 Q5,10 10,20 T20,20"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave-grid)" />
      </svg>
    `,
  },
  {
    id: 21,
    name: "Nested Squares",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="nested-squares"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="5"
              y="5"
              width="10"
              height="10"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
            <rect
              x="0"
              y="0"
              width="20"
              height="20"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nested-squares)" />
      </svg>
    `,
  },
  {
    id: 22,
    name: "Cross Dots",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="cross-dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill=${color} opacity=${opacity} />
            <path
              d="M0,10 h20 M10,0 v20"
              stroke=${strokeColor}
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cross-dots)" />
      </svg>
    `,
  },
  {
    id: 23,
    name: "Grid Dots",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="grid-dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="5" cy="5" r="2" fill=${color} opacity=${opacity} />
            <circle cx="15" cy="5" r="2" fill=${color} opacity=${opacity} />
            <circle cx="5" cy="15" r="2" fill=${color} opacity=${opacity} />
            <circle cx="15" cy="15" r="2" fill=${color} opacity=${opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots)" />
      </svg>
    `,
  },
  {
    id: 26,
    name: "Wavy Lines",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="wavy-lines"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,10 Q5,0 10,10 T20,10"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavy-lines)" />
      </svg>
    `,
  },
  {
    id: 27,
    name: "Hexagon",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="hexagon"
            x="0"
            y="0"
            width="17.32"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="8.66,0 17.32,5 17.32,15 8.66,20 0,15 0,5"
              stroke=${strokeColor}
              fill=${color}
              strokeWidth=${strokeWidth}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagon)" />
      </svg>
    `,
  },
  {
    id: 28,
    name: "Vertical Zigzag",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="vertical-zigzag"
            x="0"
            y="0"
            width="10"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,0 L5,10 L0,20"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vertical-zigzag)" />
      </svg>
    `,
  },
  {
    id: 29,
    name: "Checkerboard",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="checkerboard"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="10"
              height="10"
              fill=${color}
              opacity=${opacity}
            />
            <rect
              x="10"
              y="10"
              width="10"
              height="10"
              fill=${color}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#checkerboard)" />
      </svg>
    `,
  },
  {
    id: 30,
    name: "Sunbursts",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="sunbursts"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M15,0 L15,30 M0,15 L30,15 M5,5 L25,25 M5,25 L25,5"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sunbursts)" />
      </svg>
    `,
  },
  {
    id: 31,
    name: "Diagonal Grid",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="diagonal-grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,0 L20,20 M20,0 L0,20"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
      </svg>
    `,
  },
  {
    id: 32,
    name: "Thin Stripes",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="thin-stripes"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="5"
              height="10"
              fill=${color}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#thin-stripes)" />
      </svg>
    `,
  },
  {
    id: 33,
    name: "Dashed Lines",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="dashed-lines"
            x="0"
            y="0"
            width="20"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,5 H10 M15,5 H20"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashed-lines)" />
      </svg>
    `,
  },
  {
    id: 34,
    name: "Curved Lines",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="curved-lines"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,10 Q10,0 20,10 Q10,20 0,10"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#curved-lines)" />
      </svg>
    `,
  },
  {
    id: 36,
    name: "Arches",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="arches"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10,20 A10,10 0 0,1 0,10"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
            <path
              d="M10,20 A10,10 0 0,0 20,10"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arches)" />
      </svg>
    `,
  },
  {
    id: 38,
    name: "Crosshatch",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="crosshatch"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="10"
              y2="10"
              stroke=${strokeColor}
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
            <line
              x1="10"
              y1="0"
              x2="0"
              y2="10"
              stroke=${strokeColor}
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosshatch)" />
      </svg>
    `,
  },
  {
    id: 39,
    name: "Spiral Dots",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="spiral-dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill=${color} opacity=${opacity} />
            <circle cx="15" cy="15" r="1" fill=${color} opacity=${opacity} />
            <circle cx="5" cy="5" r="1" fill=${color} opacity=${opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spiral-dots)" />
      </svg>
    `,
  },
  {
    id: 40,
    name: "Honeycomb",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="honeycomb"
            x="0"
            y="0"
            width="17.32"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="8.66,0 17.32,5 17.32,15 8.66,20 0,15 0,5"
              stroke=${strokeColor}
              fill="none"
              strokeWidth=${strokeWidth || 0.5}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>
    `,
  },
  {
    id: 41,
    name: "Half Circles",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="half-circles"
            x="0"
            y="0"
            width="20"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10,0 A10,10 0 0,1 0,10"
              stroke=${strokeColor}
              fill=${color}
              strokeWidth=${strokeWidth || 1}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#half-circles)" />
      </svg>
    `,
  },
  {
    id: 44,
    name: "Interlocking Circles",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="interlocking-circles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="10"
              cy="10"
              r="10"
              stroke=${strokeColor}
              fill="none"
              opacity=${opacity}
            />
            <circle
              cx="20"
              cy="10"
              r="10"
              stroke=${strokeColor}
              fill="none"
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#interlocking-circles)" />
      </svg>
    `,
  },
  {
    id: 45,
    name: "Staggered Diamonds",
    svg: `
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="staggered-diamonds"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="10,0 15,10 10,20 5,10"
              stroke=${strokeColor}
              fill=${color}
              strokeWidth=${strokeWidth}
              opacity=${opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#staggered-diamonds)" />
      </svg>
    `,
  },
];

export default patterns;
