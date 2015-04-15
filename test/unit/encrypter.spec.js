/**
 * encrypter.spec.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, Harish Anchu. All rights reserved.
 * @license Licensed under MIT
 */
var Encrypter = require('../../Encrypter');

var encrypter;

describe('encrypter', function(){
    describe ('with default encryption algorithms', function(){
        encrypter = new Encrypter('sgffsdgdf');

        describe('encrypt', function(){
            it('should encrypt in' +
            'put value', function(done){
                encrypter.encrypt('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .should.not.eql('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .and.be.a.string;
                done();
            });
        });

        describe('decrypt', function(){
            it('should decrypt an encrypted value', function(done){
                var payload = encrypter.encrypt('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                encrypter.decrypt(payload)
                    .should.equal('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .and.be.a.string;
                done();
            })
        });
    });

    describe ('with custom encryption algorithms', function(){
        encrypter = new Encrypter('sgffsdgdf', 'aes-256-ctr', 'sha1WithRSAEncryption');

        describe('encrypt', function(){
            it('should encrypt in' +
            'put value', function(done){
                encrypter.encrypt('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .should.not.eql('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .and.be.a.string;
                done();
            });
        });

        describe('decrypt', function(){
            it('should decrypt an encrypted value', function(done){
                var payload = encrypter.encrypt('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                encrypter.decrypt(payload)
                    .should.equal('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .and.be.a.string;
                done();
            })
        });
    });

});