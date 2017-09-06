const _file = require('../../utils/file');
const should = require('should');

let _utilsFs = _file.loadDir('./utils');
let _srcFs = _file.loadDir('./src', true);

describe('test loadDir', function() {
	describe('#recur = false', function() {
		it('loadDir ./utils should include utils/file.js', function() {
			should(_utilsFs).containEql('utils/file.js');
		});
	});

	describe('#recur = true', function() {
		it('loadDir ./src should include src/controller/index.js', function() {
			should(_srcFs).containEql('src/controllers/index.js');
		});
	});
});