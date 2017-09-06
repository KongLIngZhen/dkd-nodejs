/**
 * File
 * 提供文件处理相关方法
 * Created by sy on 2017/8/4.
 */

'use strict';

const fs = require('fs');
const path = require('path');

/**
 *  获取目录下的文件列表
 *  @param filepath 文件路径
 *  @param recur 是否递归 默认false
 *  @returns [*]
 */

exports.loadDir = (filepath, recur) => {
	let result = [];
	let load = (filepath, recur) => {
		recur = recur || false;
		fs.readdirSync(filepath).forEach((val) => {
			let fp = path.join(filepath, val);
			let statsInfo = fs.statSync(fp);
			if (statsInfo.isDirectory() && recur) load(fp, recur);
			if (statsInfo.isFile()) {
				result.push(fp);
			}
		});
	};
	load(filepath, recur);
	return result;
};


/**
 *  绝对路径转相对路径
 *  @param filepath
 *  @returns {*}
 */

exports.toRelative = (filepath) => {
	return filepath.replace(/\\/g, '/');
};