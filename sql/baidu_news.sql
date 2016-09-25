-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-09-04 13:34:40
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidu_news`
--

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `account` varchar(100) CHARACTER SET utf8 NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`id`, `account`, `password`) VALUES
(1, 'jikexueyuan', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `news_item`
--

CREATE TABLE `news_item` (
  `news_id` int(11) NOT NULL COMMENT '自动增长',
  `img_address1` char(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `img_address2` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `img_address3` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `news_title` char(200) CHARACTER SET utf8 NOT NULL,
  `news_time` date NOT NULL,
  `news_cart` varchar(100) CHARACTER SET utf8 NOT NULL,
  `tab` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `news_item`
--

INSERT INTO `news_item` (`news_id`, `img_address1`, `img_address2`, `img_address3`, `news_title`, `news_time`, `news_cart`, `tab`) VALUES
(3, '/images/testimg1.png', '', '', '果然，罗永浩去参加乐视发布会是有下文的', '2016-08-01', '乐视', 'various'),
(4, '/images/testimg2.jpeg', NULL, NULL, 'Uber连发三条好消息，但司机们要哭晕在厕所', '2016-08-19', '', 'various'),
(6, '/images/testimg3.png', NULL, NULL, '纯讲规则：美国人的文字游戏和中国队的抗辩博弈', '2016-08-19', '', 'various'),
(7, '/images/img4.jpeg', '', '', '这是一个测试用的内容', '2016-08-17', '测试', 'various'),
(8, '/images/img5.jpeg', '', '', '这是一份测试数据，可以用', '2016-08-20', '测试', 'various'),
(9, '/images/img6.jpeg', NULL, NULL, '最短命的部门出炉，证监会创新部正式解散！', '2016-08-18', '股市行情', 'various'),
(10, '/images/img7.jpeg', NULL, NULL, '独家-湖人已经签下易建联，时隔4年重返NBA', '2016-08-17', 'NBA', 'various'),
(11, '/images/img8.jpeg', NULL, NULL, '为什么支付宝很难做成社交，而又一定会继续做下去？', '2016-08-17', 'BATM', 'various'),
(12, '/images/img9.jpeg', NULL, NULL, '专访Facebook CTO Mike Schroepfer ：愿景、创新', '2016-08-19', 'Facebook', 'various'),
(13, '/images/img10.png', NULL, NULL, '王宝强的“婚变”与“豹变”：人设的崩塌与重塑？', '2016-08-18', '', 'various'),
(19, '/images/img12.jpeg', '', '', '跳水男单10米台陈艾森夺冠中国收获第24金', '2016-08-20', '搜狐头条', 'various'),
(22, '', '', '', '这是通过管理后台创建的测试数据', '2016-08-21', '测试', 'location'),
(23, '/images/img13.jpeg', '/images/img14.jpeg', '/images/img15.jpeg', '《笑傲3》小沈龙“落魄”当助演 郭德纲师侄登场', '2016-08-21', '相声', 'entertainment'),
(24, '', '', '', '万科恒大夺环北京楼市受阻 本地开发商甚至可影响政府政策', '2016-08-21', '房企', 'location'),
(25, '', '', '', '山屿海2：1力克北京理工&quot;测试&quot;继续领跑', '2016-08-21', '', 'location'),
(26, '', '', '', '李宇春北京巡演超模助阵 首度挑战“钢管舞” 测试2', '2016-09-03', '李宇春', 'location'),
(27, '', '', '', '北京轻微事故不挪车致拥堵罚200元 四成网友支持', '2016-08-20', '', 'location'),
(28, '', '', '', '北京新房环比上涨1.7% 二手房环比上涨1.6%', '2016-08-21', '', 'location'),
(29, '', '', '', '如何治理网络订餐平台背后乱象', '2016-08-20', '订餐网', 'location'),
(30, '', '', '', '民生银行员工私售产品 受骗客户达20人', '2016-08-21', '商业银行', 'location'),
(31, '', '', '', '京台高速成功跨越六环路 预计2016年年底开通', '2016-08-21', '', 'location'),
(32, '', '', '', '南水北调来水已占北京市城市用水的70%', '2016-08-20', '房产行业', 'location'),
(33, '', '', '', '冒名抽血修改结果 代人体验成产业链', '2016-08-21', '体验', 'location'),
(34, '', '', '', '北京密云李子：黄玉红霞满枝头', '2016-08-17', '玉器', 'location'),
(35, '', '', '', '坐特9双层巴士，手机行摄，8元游遍北京四环两面美景。', '2016-08-21', '', 'location'),
(36, '', '', '', '北京将建跨境电商综合服务园区', '2016-08-21', '电子商务', 'location'),
(37, '/images/img16.jpeg', '/images/img17.jpeg', '/images/img18.jpeg', '电影《水晶争夺战》在鲅鱼圈保利大剧院举行开机仪式', '2016-08-21', '', 'entertainment'),
(38, '/images/img19.jpeg', '/images/img20.jpeg', '/images/img21.jpeg', '王宝强自住豪宅人去楼空 另一处物业也大门紧锁', '2016-08-21', '', 'entertainment'),
(39, '/images/img22.jpeg', '', '', '同情宝宝能给其新作《大闹天竺》带来多少票房？', '2016-08-21', '王长田', 'various'),
(40, '/images/img23.jpeg', '', '', '郝景芳摘雨果奖，称不希望《北京折叠》成真，希望未来更加光明', '2016-08-21', '', 'various'),
(41, '/images/img24.jpeg', '', '', '权威典藏版：漫游费的前世今生（上）', '2016-08-21', '百家原创', 'various'),
(42, '/images/img25.jpg', '', '', '刘慈欣之后 郝景芳凭《北京折叠》再获雨果奖', '2016-08-21', 'cnbeta头条', 'various'),
(43, '/images/img26.jpeg', '', '', '李琦刘金山车祸1死3伤 刘金山被人救出曾一度"昏迷"', '2016-08-20', '车祸', 'various'),
(45, '/images/testimgS2.png', '', '', '这是一条上传1张图片的测试新闻', '2016-08-04', '单张', 'various'),
(46, '/images/testimgS1.jpg', '/images/testimgS2.png', '/images/testimgS3.png', '这是一条测试批量上传图片的新闻', '2016-09-04', '多张', 'entertainment');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_item`
--
ALTER TABLE `news_item`
  ADD PRIMARY KEY (`news_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `news_item`
--
ALTER TABLE `news_item`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=47;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
