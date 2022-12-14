/*  —————————————— 自定义积木块设置 ——————————————  */
Blockly.defineBlocksWithJsonArray([
  {
    type: "world_say",
    message0: "向所有玩家发送一条信息 %1",
    args0: [
      {
        type: "input_value",
        name: "MESSAGE",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "向所有玩家发送一条消息",
    helpUrl: "",
  },
  {
    "type": "world_projectname",
    "message0": "地图名称",
    "output": "String",
    "colour": 230,
    "tooltip": "地图的名称",
    "helpUrl": "",
  },
  {
    type: "world_url",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "地图URL",
      },
    ],
    output: "String",
    colour: 230,
    tooltip: "地图的URL（也就是地图链接）",
    helpUrl: "",
  },
  {
    type: "world_currentTick",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前Tick计数",
      },
    ],
    output: "Number",
    colour: 230,
    tooltip: "世界当前的Tick计数",
    helpUrl: "",
  },
  {
    type: "world_entityQuota",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前还可以建造的实体数量",
      },
    ],
    output: "Number",
    colour: 255,
    tooltip: "世界上还可以建造的实体数量",
    helpUrl: "",
  },
  {
    type: "world_worldentitylength",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "当前存在的实体数量",
      },
    ],
    output: "Number",
    colour: 255,
    tooltip: "世界上当前存在的实体数量",
    helpUrl: "",
  },
  {
    type: "voxels_setid",
    message0: "设置 X %1 Y %2 Z %3 的方块ID为 %4 旋转码为 %5",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "ID",
        text: "127",
      },
      {
        type: "field_dropdown",
        name: "rid",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "放一个方块",
    helpUrl: "",
  },
  {
    type: "voxels_setname",
    message0: "设置 X %1 Y %2 Z %3 的方块名称为 %4 旋转码为 %5",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
      {
        type: "field_input",
        name: "ID",
        text: "grass",
      },
      {
        type: "field_dropdown",
        name: "rid",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "放一个方块",
    helpUrl: "",
  },
  {
    type: "voxels_get",
    message0: "读取 x %1 y %2 z %3 的方块，返回方块ID",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
    ],
    output: "Number",
    colour: 120,
    tooltip: "读取地形上的方块，返回方块ID",
    helpUrl: "",
  },
  {
    type: "voxels_Rotation",
    message0: "读取 x %1 y %2 z %3 的方块，返回方块旋转码（0~3）",
    args0: [
      {
        type: "field_input",
        name: "X",
        text: "0",
      },
      {
        type: "field_input",
        name: "Y",
        text: "0",
      },
      {
        type: "field_input",
        name: "Z",
        text: "0",
      },
    ],
    output: "Number",
    colour: 120,
    tooltip: "读取地形上的方块，返回方块旋转码（0~3）",
    helpUrl: "",
  },
  {
    type: "voxels_name",
    message0: "将方块ID %1 转换为名称",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "0",
      },
    ],
    output: "String",
    colour: 120,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
  {
    type: "voxels_id",
    message0: "将方块名称 %1 转换为ID",
    args0: [
      {
        type: "field_input",
        name: "ID",
        text: "grass",
      },
    ],
    output: "Number",
    colour: 120,
    tooltip: "将方块ID转换为方块名称",
    helpUrl: "",
  },
  {
    type: "voxels_types",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "所有方块的名称",
      },
    ],
    output: "Array",
    colour: 120,
    tooltip: "返回包含所有方块名称的数组",
    helpUrl: "",
  },
  {
    type: "voxels_typesid",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "MESSAGE",
        text: "所有方块的ID",
      },
    ],
    output: "Array",
    colour: 120,
    tooltip: "返回包含所有方块ID的数组",
    helpUrl: "",
  },
  {
    type: "world_onEntityDestroy",
    message0: "当实体被 %1 时 %2 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "t",
        options: [
          ["创建", "Create"],
          ["销毁", "Destroy"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "tex",
      },
    ],
    colour: 210,
    tooltip: "当创建或销毁实体时触发的事件",
    helpUrl: "",
  },
  {
    "type": "world_onEntityDestroy_entity",
    "message0": "被建造/销毁的实体",
    "output": "Object",
    "colour": 210,
    "tooltip": "被建造/销毁的实体",
    "helpUrl": "",
  },
  {
    "type": "world_onInteract",
    "message0": "当实体/玩家被 %1 时 %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "t",
        "options": [
          [
            "互动",
            "Interact"
          ],
          [
            "点击",
            "Click"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "tex"
      }
    ],
    "colour": 210,
    "tooltip": "当实体/玩家被互动或点击时触发的事件",
    "helpUrl": ""
  },
  {
    "type": "world_onInteract_entity",
    "message0": "发起互动的玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "发起互动的玩家",
    "helpUrl": "",
  },
  {
    "type": "world_onInteract_targetEntity",
    "message0": "被互动的实体/玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "被互动的实体/玩家",
    "helpUrl": "",
  },
  {
    "type": "world_onClick_entity",
    "message0": "被点击的实体/玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "被点击的实体/玩家",
    "helpUrl": "",
  },
  {
    "type": "world_onInteract_clicker",
    "message0": "发起点击事件的玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "发起点击事件的玩家",
    "helpUrl": "",
  },
  {
    "type": "world_onInteract_button",
    "message0": "点击的按钮",
    "output": "String",
    "colour": 210,
    "tooltip": "点击的按钮",
    "helpUrl": "",
  },
  {
    "type": "world_onInteract_distance",
    "message0": "玩家到被点击实体的距离",
    "output": "Number",
    "colour": 210,
    "tooltip": "玩家到被点击实体的距离",
    "helpUrl": "",
  },
  {
    "type": "world_onPlayerJoin",
    "message0": "当玩家 %1 地图时 %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "t",
        "options": [
          [
            "进入",
            "Join"
          ],
          [
            "离开",
            "Leave"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "tex"
      }
    ],
    "colour": 210,
    "tooltip": "当玩家进入或离开时触发的事件",
    "helpUrl": ""
  },
  {
    "type": "world_onPlayerJoin_entity",
    "message0": "进入的玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "进入的玩家",
    "helpUrl": "",
  },{
    "type": "object_null",
    "message0": "建造一个空对象",
    "inputsInline": true,
    "output": "Object",
    "colour": 260,
    "tooltip": "建造一个空的对象，具体内容可以自己设置",
    "helpUrl": ""
  },{
    "type": "object_set",
    "message0": "设置对象 %1 %2 里的 %3 值为 %4 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "object",
        "check": "Object"
      },
      {
        "type": "field_input",
        "name": "key",
        "text": "key"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "value"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "设置项",
    "helpUrl": ""
  },{
    "type": "object_get",
    "message0": "获取对象 %1 %2 里的 %3 值",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "object",
        "check": "Object"
      },
      {
        "type": "field_input",
        "name": "key",
        "text": "key"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 260,
    "tooltip": "获取项",
    "helpUrl": ""
  },{
  "type": "object_copy",
  "message0": "将对象 %1 %2 里的所有项复制到 %3 %4 对象里",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "target",
      "check": "Object"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "复制对象里的所有项到另外一个对象里",
  "helpUrl": ""
},{
  "type": "object_inc",
  "message0": "对象 %1 %2 里是否存在 %3 值",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    },
    {
      "type": "field_input",
      "name": "key",
      "text": "key"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 260,
  "tooltip": "判断某个对象是否存在某个项",
  "helpUrl": ""
},{
  "type": "object_geto",
  "message0": "获取对象 %1 %2 的 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    },
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "项数（数字）",
          "length"
        ],
        [
          "所有键（列表）",
          "keys"
        ],
        [
          "所有值（列表）",
          "values"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": [
    "Number",
    "Array"
  ],
  "colour": 260,
  "tooltip": "获取对象的项数等数据",
  "helpUrl": ""
},{
  "type": "object_delete",
  "message0": "删除对象 %1 %2 中的 %3 键",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    },
    {
      "type": "field_input",
      "name": "key",
      "text": "key"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "删除对象的某个键值",
  "helpUrl": ""
},{
  "type": "object_freeze",
  "message0": "冻结对象 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "冻结某个对象，冻结后不可以用代码修改，建造，删除它的键值，只能读取",
  "helpUrl": ""
},{
  "type": "object_isfreeze",
  "message0": "对象 %1 是否已冻结",
  "args0": [
    {
      "type": "input_value",
      "name": "object",
      "check": "Object"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 260,
  "tooltip": "查看某个对象是否被冻结",
  "helpUrl": ""
},{
  "type": "box3_sleep",
  "message0": "等待 %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "object",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "秒",
          "s"
        ],
        [
          "毫秒",
          "ms"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "等待语句",
  "helpUrl": ""
},{
  "type": "world_onFluidEnter",
  "message0": "当实体/玩家 %1 液体时 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "进入",
          "Enter"
        ],
        [
          "离开",
          "Leave"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "tex"
    }
  ],
  "colour": 210,
  "tooltip": "当实体进入或离开液体时触发的事件",
  "helpUrl": ""
},
  {
    "type": "world_onFluidEnter_entity",
    "message0": "进入液体的实体/玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "进入液体的实体/玩家",
    "helpUrl": "",
  },
  {
    "type": "world_onFluidEnter_voxel",
    "message0": "进入的液体方块ID",
    "output": "Object",
    "colour": 210,
    "tooltip": "进入的液体方块ID",
    "helpUrl": "",
  },{
  "type": "world_onVoxelContact",
  "message0": "当实体/玩家 %1 触碰方块时 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "开始",
          "Contact"
        ],
        [
          "结束",
          "Separate"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "tex"
    }
  ],
  "colour": 210,
  "tooltip": "当实体触碰方块时触发的事件",
  "helpUrl": ""
},
  {
    "type": "world_onVoxelContact_entity",
    "message0": "碰到方块的实体/玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "进入液体的实体/玩家",
    "helpUrl": "",
  },
  {
    "type": "world_onVoxelContact_voxel",
    "message0": "碰到的方块ID",
    "output": "Object",
    "colour": 210,
    "tooltip": "进入的液体方块ID",
    "helpUrl": "",
  },{
  "type": "world_onPress",
  "message0": "当玩家 %1 按钮时 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "按下",
          "Press"
        ],
        [
          "松开",
          "Release"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "tex"
    }
  ],
  "colour": 210,
  "tooltip": "输入事件，在玩家按下或松开按钮时触发",
  "helpUrl": ""
},

  {
    "type": "world_onPress_entity",
    "message0": "按下按钮的玩家",
    "output": "Object",
    "colour": 210,
    "tooltip": "按下按钮的玩家",
    "helpUrl": "",
  },
  {
    "type": "world_onPress_button",
    "message0": "按下的按钮",
    "output": "String",
    "colour": 210,
    "tooltip": "按下按钮的玩家",
    "helpUrl": "",
  },
{
  "type": "box3_runcode1",
  "message0": "运行代码 %1",
  "args0": [
    {
      "type": "field_input",
      "name": "code",
      "text": "code"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "运行一些代码",
  "helpUrl": ""
},{
  "type": "box3_runcode2",
  "message0": "运行代码 %1",
  "args0": [
    {
      "type": "field_input",
      "name": "code",
      "text": "code"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "box3_require",
  "message0": "运行代码文件 %1",
  "args0": [
    {
      "type": "field_input",
      "name": "code",
      "text": "code.js"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "console_clear",
  "message0": "清除控制台",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "清掉控制台",
  "helpUrl": ""
},{
  "type": "console_log",
  "message0": "在控制台里 %1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "输出",
          "log"
        ],
        [
          "警告",
          "warn"
        ],
        [
          "报错",
          "error"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "text"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "在控制台里输出一些值",
  "helpUrl": ""
},
  {
  "type": "sql_createtable",
  "message0": "建造SQL数据表 %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "tn",
      "text": "player"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "sql_createtable_keys_block"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "建造一个数据表",
  "helpUrl": "https://docs.box3.codemao.cn/box3databasepreface.html#%E5%88%9B%E5%BB%BA%E8%A1%A8"
},
  {
  "type": "sql_createtable_keys_block",
  "message0": "键名 %1 类型 %2 不能为空 %3 设为主键 %4 %5 其他配置 %6",
  "args0": [
    {
      "type": "field_input",
      "name": "kn",
      "text": "key"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "文本",
          "TEXT"
        ],
        [
          "整数",
          "INT"
        ],
        [
          "小数",
          "REAL"
        ],
        [
          "空值",
          "NULL"
        ],
        [
          "二进制",
          "BLOB"
        ],
        [
          "其他",
          "NUMERIC"
        ]
      ]
    },
    {
      "type": "field_checkbox",
      "name": "notnull",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "ismain",
      "checked": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "sql_createtable_keys_block"
    }
  ],
  "inputsInline": true,
  "previousStatement": "sql_createtable_keys_block",
  "nextStatement": "sql_createtable_keys_block",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "sql_createtable_keys_blockxianzhi",
  "message0": "限制长度 %1",
  "args0": [
    {
      "type": "field_number",
      "name": "chang",
      "value": 20,
      "min": 0
    }
  ],
  "previousStatement": "sql_createtable_keys_block",
  "nextStatement": "sql_createtable_keys_block",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "sql_createtable_keys_blockmorenzhi",
  "message0": "如果为空，有默认值 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "Number",
        "String"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": "sql_createtable_keys_block",
  "nextStatement": "sql_createtable_keys_block",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "box3_vector",
  "message0": "Box3向量 X %1 Y %2 Z %3",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "z",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Box3Vector3",
  "colour": 120,
  "tooltip": "box3向量",
  "helpUrl": "https://docs.box3.codemao.cn/box3vector3.html"
},{
  "type": "box3_bounds",
  "message0": "Box3区域 最小 %1 最大 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Box3Vector3"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Box3Vector3"
    }
  ],
  "inputsInline": true,
  "output": "Box3Bounds3",
  "colour": 120,
  "tooltip": "box3区域",
  "helpUrl": "https://docs.box3.codemao.cn/box3bounds3.html"
},{
  "type": "box3_quaternion",
  "message0": "Box3四元数 W %1 X %2 Y %3 Z %4",
  "args0": [
    {
      "type": "input_value",
      "name": "w",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "z",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Box3Quaternion",
  "colour": 160,
  "tooltip": "box3四元数",
  "helpUrl": "https://docs.box3.codemao.cn/box3quaternion.html"
},{
  "type": "box3_rgbcolor",
  "message0": "Box3rgb颜色 r %1 g %2 b %3",
  "args0": [
    {
      "type": "input_value",
      "name": "r",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "g",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Box3RGBColor",
  "colour": 0,
  "tooltip": "box3rgb颜色",
  "helpUrl": ""
},{
  "type": "box3_rgbacolor",
  "message0": "Box3rgba颜色 r %1 g %2 b %3 透明 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "r",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "g",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "a",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Box3RGBAColor",
  "colour": 0,
  "tooltip": "box3rgba颜色",
  "helpUrl": "https://docs.box3.codemao.cn/box3rgbacolor.html"
},{
  "type": "box3_sound",
  "message0": "Box3音效 音频名字 %1 音量 %2 % 播放速度 %3 x",
  "args0": [
    {
      "type": "field_input",
      "name": "s",
      "text": "bgm.mp3"
    },
    {
      "type": "input_value",
      "name": "d",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "g",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Object",
  "colour": 120,
  "tooltip": "box3音效",
  "helpUrl": "https://docs.box3.codemao.cn/box3soundeffect.html"
},{
  "type": "player_directmessage",
  "message0": "向玩家 %1 发送私信 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "input_value",
      "name": "m",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "向某个玩家发送私信",
  "helpUrl": ""
},{
  "type": "player_muted",
  "message0": "设置玩家 %1 禁言为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "field_dropdown",
      "name": "t",
      "options": [
        [
          "开启",
          "true"
        ],
        [
          "关闭",
          "false"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家禁言",
  "helpUrl": ""
},{
  "type": "player_invisible",
  "message0": "设置玩家 %1 的隐身为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "field_dropdown",
      "name": "t",
      "options": [
        [
          "开启",
          "true"
        ],
        [
          "关闭",
          "false"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家隐身",
  "helpUrl": ""
},{
  "type": "player_showname",
  "message0": "设置玩家 %1 的名字显示为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "field_dropdown",
      "name": "t",
      "options": [
        [
          "开启",
          "true"
        ],
        [
          "关闭",
          "false"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家名字显示",
  "helpUrl": ""
},{
  "type": "player_scale",
  "message0": "设置玩家 %1 的大小为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "input_value",
      "name": "s",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家大小",
  "helpUrl": ""
},{
  "type": "player_metalness",
  "message0": "设置玩家 %1 的金属感为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "input_value",
      "name": "s",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家金属感",
  "helpUrl": ""
},{
  "type": "player_emissive",
  "message0": "设置玩家 %1 的荧光度为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "input_value",
      "name": "s",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家荧光度",
  "helpUrl": ""
},{
  "type": "player_shininess",
  "message0": "设置玩家 %1 的反光度为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "input_value",
      "name": "s",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家反光度",
  "helpUrl": ""
},{
  "type": "player_color",
  "message0": "设置玩家 %1 的颜色为 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "p",
      "check": "Object"
    },
    {
      "type": "input_value",
      "name": "s",
      "check": "Box3RGBColor"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "设置玩家颜色",
  "helpUrl": ""
}
]);


Blockly.JavaScript['player_color'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.color = ${s};\n`;
  return code;
};


Blockly.JavaScript['player_shininess'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.shininess = ${s};\n`;
  return code;
};

Blockly.JavaScript['player_emissive'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.emissive = ${s};\n`;
  return code;
};


Blockly.JavaScript['player_metalness'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.metalness = ${s};\n`;
  return code;
};

Blockly.JavaScript['player_scale'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.scale = ${s};\n`;
  return code;
};
Blockly.JavaScript['player_showname'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_t = block.getFieldValue('t');
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.showName = ${dropdown_t};\n`;
  return code;
};

Blockly.JavaScript['player_invisible'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_t = block.getFieldValue('t');
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.invisible = ${dropdown_t};\n`;
  return code;
};
Blockly.JavaScript['player_muted'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_t = block.getFieldValue('t');
  // TODO: Assemble JavaScript into code variable.
  var code = `{p}.player.muted = ${dropdown_t};\n`;
  return code;
};
Blockly.JavaScript['player_directmessage'] = function(block) {
  var p = Blockly.JavaScript.valueToCode(block, 'p', Blockly.JavaScript.ORDER_ATOMIC);
  var m = Blockly.JavaScript.valueToCode(block, 'm', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${p}.player.directMessage(${m});\n`;
  return code;
};
Blockly.JavaScript['box3_sound'] = function(block) {
  var s = block.getFieldValue('s');
  var d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC);
  var g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{sample:"audio/${s}",gain:${d}/100,pitch:${g}}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['box3_rgbacolor'] = function(block) {
  var r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `new Box3RGBAColor(${r}/255,${g}/255,${b}/255,${a}/255)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['box3_rgbcolor'] = function(block) {
  var r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `new Box3RGBColor(${r}/255,${g}/255,${b}/255)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['box3_quaternion'] = function(block) {
  var w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `new Box3Quaternion(${w},${x},${y},${z})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['box3_bounds'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `new Box3Bounds3(${x},${y})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['box3_vector'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `new Box3Vector3(${x},${y},${z})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sql_createtable_keys_blockmorenzhi'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ` DEFAULT ${value_name}`;
  return code;
};
Blockly.JavaScript['sql_createtable_keys_blockxianzhi'] = function(block) {
  var number_chang = block.getFieldValue('chang');
  // TODO: Assemble JavaScript into code variable.
  var code = ` CHAR(${number_chang})`;
  return code;
};
Blockly.JavaScript['sql_createtable_keys_block'] = function(block) {
  var text_kn = block.getFieldValue('kn');
  var dropdown_type = block.getFieldValue('type');
  var checkbox_notnull = block.getFieldValue('notnull') == 'TRUE';
  var checkbox_ismain = block.getFieldValue('ismain') == 'TRUE';
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `,\n"${text_kn}" ${dropdown_type} ${statements_name.slice(3)}${checkbox_ismain?" PRIMARY KEY UNIQUE":""}${checkbox_notnull?" NOT NULL":""}`;
  return code;
};
Blockly.JavaScript['sql_createtable'] = function(block) {
  var text_tn = block.getFieldValue('tn');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `db.sql\`CREATE TABLE IF NOT EXISTS "${text_tn}" (${statements_name.slice(3)}\n)\`;\n`;
  return code;
};
Blockly.JavaScript['console_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.clear();\n';
  return code;
};Blockly.JavaScript['console_log'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `console.${dropdown_type}(${value_text});\n`;
  return code;
};

Blockly.JavaScript['box3_require'] = function(block) {
  var text_code = block.getFieldValue('code');
  // TODO: Assemble JavaScript into code variable.
  var code = `require("./${text_code}");\n`;
  return code;
};
Blockly.JavaScript['box3_runcode2'] = function(block) {
  var text_code = block.getFieldValue('code');
  // TODO: Assemble JavaScript into code variable.
  var code = `${text_code}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['box3_runcode1'] = function(block) {
  var text_code = block.getFieldValue('code');
  // TODO: Assemble JavaScript into code variable.
  var code = `${text_code}\n`;
  return code;
};
Blockly.JavaScript['world_onPress'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'tex');
  var dropdown_name = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = `world.on${dropdown_name}(async({entity,button})=>{\n${statements_name}})`;
  return code;
};

Blockly.JavaScript['world_onVoxelContact'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'tex');
  var dropdown_name = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = `world.onVoxel${dropdown_name}(async({entity,voxel})=>{\n${statements_name}})`;
  return code;
};
Blockly.JavaScript["world_onFluidEnter_entity"] = function () {
  return ["entity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onFluidEnter_voxel"] = function () {
  return ["voxel", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onInteract_entity"] = function () {
  return ["entity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onInteract_targetEntity"] = function () {
  return ["targetEntity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onClick_entity"] = function () {
  return ["entity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onInteract_clicker"] = function () {
  return ["clicker", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onInteract_button"] = function () {
  return ["button", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onPlayerJoin_entity"] = function () {
  return ["entity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onEntityDestroy_entity"] = function () {
  return ["entity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onPress_entity"] = function () {
  return ["entity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onPress_button"] = function () {
  return ["button", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onVoxelContact_entity"] = function () {
  return ["entity", Blockly.JavaScript.ORDER_NONE];
};Blockly.JavaScript["world_onVoxelContact_voxel"] = function () {
  return ["voxel", Blockly.JavaScript.ORDER_NONE];
};
 
Blockly.JavaScript['world_onPress'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'tex');
  var dropdown_name = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = `world.on${dropdown_name}(async({entity,button})=>{\n${statements_name}})`;
  return code;
};

Blockly.JavaScript['world_onFluidEnter'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'tex');
  var dropdown_name = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = `world.onFluid${dropdown_name}(async({entity,voxel})=>{\n${statements_name}})`;
  return code;
};

Blockly.JavaScript['object_freeze'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `Object.freeze(${value_object || "{}"});\n`;
  return code;
};
Blockly.JavaScript['box3_sleep'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = `await sleep(${dropdown_type=="ms"?value_object:`${Number(value_object)*1000}`});\n`;
  return code;
};
Blockly.JavaScript['object_null'] = function(block) {
  return ["{}", Blockly.JavaScript.ORDER_NONE];;
};
Blockly.JavaScript['object_isfreeze'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `Object.isFrozen(${value_object || "{}"})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_copy'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Object.assign(${value_object || "{}"},${value_target || "{}"});\n`;
  return code;
};
Blockly.JavaScript['object_delete'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  var code = `delete ${value_object || "{}"}['${text_key}'];\n`;
  return code;
};
Blockly.JavaScript['object_set'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_object || "{}"}['${text_key}'] = ${value_value};\n`;
  return code;
};
Blockly.JavaScript['object_inc'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  // TODO: Assemble JavaScript into code variable.
  var code = `('${text_key}' in ${value_object || "{}"})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var text_key = block.getFieldValue('key');
  var code = `${value_object || "{}"}['${text_key}']`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_geto'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('option');
  if(dropdown_option=="length"){var code = `Object.keys(${value_object || "{}"}).length`;}else{var code = `Object.${dropdown_option}(${value_object || "{}"})`;}
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_say"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "MESSAGE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return "world.say(" + value_name + ");\n";
};

Blockly.JavaScript["world_projectname"] = function () {
  return ["world.projectName", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_url"] = function () {
  return ["world.url", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_currentTick"] = function () {
  return ["world.currentTick", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_entityQuota"] = function () {
  return ["world.entityQuota", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_worldentitylength"] = function () {
  return [`world.querySelectorAll("*").length`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_setid"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  var text_ID = block.getFieldValue("ID");
  var text_rID = block.getFieldValue("rid");
  return (
    "voxels.setVoxel(" +
    text_x +
    "," +
    text_y +
    "," +
    text_z +
    "," +
    text_ID +
    "," +
    text_rID +
    ");\n"
  );
};
Blockly.JavaScript["voxels_setname"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  var text_ID = block.getFieldValue("ID");
  var text_rID = block.getFieldValue("rid");
  return (
    "voxels.setVoxel(" +
    text_x +
    "," +
    text_y +
    "," +
    text_z +
    ",'" +
    text_ID +
    "'," +
    text_rID +
    ");\n"
  );
};

Blockly.JavaScript["voxels_get"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  return ["voxels.getVoxelId(" + text_x + "," + text_y + "," + text_z + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_Rotation"] = function (block) {
  var text_x = block.getFieldValue("X");
  var text_y = block.getFieldValue("Y");
  var text_z = block.getFieldValue("Z");
  return ["voxels.getVoxelRotation(" + text_x + "," + text_y + "," + text_z + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_id"] = function (block) {
  var id = block.getFieldValue("ID");
  return ["voxels.id(" + id + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_name"] = function (block) {
  var id = block.getFieldValue("ID");
  return ["voxels.name(" + id + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_types"] = function () {
  return ["voxels.VoxelTypes", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["voxels_typesid"] = function () {
  return ["voxels.VoxelTypes.map((x) => {return voxels.id(x)})", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["world_onEntityDestroy"] = function (block) {
  var id = block.getFieldValue("t");
  var value_name =  Blockly.JavaScript.statementToCode(
    block,
    "tex",
  );
  return `world.onEntity${id}(async({entity})=>{\n${value_name}});`;
};


Blockly.JavaScript["world_onPlayerJoin"] = function (block) {
  var id = block.getFieldValue("t");
  var value_name =  Blockly.JavaScript.statementToCode(
    block,
    "tex",
  );
  return `world.onPlayer${id}(async({entity})=>{\n${value_name}});`;
};

Blockly.JavaScript["world_onInteract"] = function (block) {
  var id = block.getFieldValue("t");
  var value_name = Blockly.JavaScript.statementToCode(
    block,
    "tex",
  ); 
  return `world.on${id}(async({entity,${id=="Interact"?"targetEntity":"clicker,button,distance"}})=>{\n${value_name}});`;
};