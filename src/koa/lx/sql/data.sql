CREATE TABLE IF NOT EXISTS  `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data_info` json DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- ENGINE=InnoDB 使用 InnoDB 引擎
-- DEFAULT CHARSET=utf8 数据库默认编码为utf-8
-- IF NOT EXISTS 如果不存在
-- if exists 如果存在
-- NOT NULL 指示某列不能存储 NULL 值
-- UNIQUE 约束唯一标识数据库表中的每条记录

-- 主键创建方式