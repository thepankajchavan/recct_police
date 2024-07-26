<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="facebook"><i class="fab fa-facebook"></i> Facebook</label>
            <div class="input-group">
                <input type="url" value="{{ setting('facebook') ?? old('facebook')}}" id="facebook" name="facebook" class="form-control auto-slug @error('facebook')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('facebook')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="twitter"><i class="fab fa-twitter"></i> Twitter</label>
            <div class="input-group">
                <input type="url" value="{{ setting('twitter') ?? old('twitter')}}" id="twitter" name="twitter" class="form-control auto-slug @error('twitter')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('twitter')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="telegram"><i class="fab fa-telegram"></i> Telegram</label>
            <div class="input-group">
                <input type="url" value="{{ setting('telegram') ?? old('telegram')}}" id="telegram" name="telegram" class="form-control auto-slug @error('telegram')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('telegram')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="vk"><i class="fab fa-vk"></i> Vk</label>
            <div class="input-group">
                <input type="url" value="{{ setting('vk') ?? old('vk')}}" id="vk" name="vk" class="form-control auto-slug @error('vk')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('vk')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="instagram"><i class="fab fa-instagram"></i> Instagram</label>
            <div class="input-group">
                <input type="url" value="{{ setting('instagram') ?? old('instagram')}}" id="instagram" name="instagram" class="form-control auto-slug @error('instagram')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('instagram')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="pinterest"><i class="fab fa-pinterest"></i> Pinterest</label>
            <div class="input-group">
                <input type="url" value="{{ setting('pinterest') ?? old('pinterest')}}" id="pinterest" name="pinterest" class="form-control auto-slug @error('pinterest')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('pinterest')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="medium"><i class="fab fa-medium"></i> Medium</label>
            <div class="input-group">
                <input type="url" value="{{ setting('medium') ?? old('medium')}}" id="medium" name="medium" class="form-control auto-slug @error('medium')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('medium')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="discord"><i class="fab fa-discord"></i> Discord</label>
            <div class="input-group">
                <input type="text" value="{{ setting('discord') ?? old('discord')}}" id="discord" name="discord" class="form-control auto-slug @error('discord')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('discord')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="github"><i class="fab fa-github"></i> Github</label>
            <div class="input-group">
                <input type="url" value="{{ setting('github') ?? old('github')}}" id="github" name="github" class="form-control auto-slug @error('github')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('github')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="linkedin"><i class="fab fa-linkedin"></i> Linkedin</label>
            <div class="input-group">
                <input type="url" value="{{ setting('linkedin') ?? old('linkedin')}}" id="linkedin" name="linkedin" class="form-control auto-slug @error('linkedin')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('linkedin')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="okru"><i class="fab fa-odnoklassniki"></i> Ok.ru</label>
            <div class="input-group">
                <input type="url" value="{{ setting('okru') ?? old('okru')}}" id="okru" name="okru" class="form-control auto-slug @error('okru')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('okru')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="reddit"><i class="fab fa-reddit"></i> Reddit</label>
            <div class="input-group">
                <input type="url" value="{{ setting('reddit') ?? old('reddit')}}" id="reddit" name="reddit" class="form-control auto-slug @error('reddit')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('reddit')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="skype"><i class="fab fa-skype"></i> Skype</label>
            <div class="input-group">
                <input type="text" value="{{ setting('skype') ?? old('skype')}}" id="skype" name="skype" class="form-control auto-slug @error('skype')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('skype')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="snapchat"><i class="fab fa-snapchat"></i> Snapchat</label>
            <div class="input-group">
                <input type="url" value="{{ setting('snapchat') ?? old('snapchat')}}" id="snapchat" name="snapchat" class="form-control auto-slug @error('snapchat')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('snapchat')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="spotify"><i class="fab fa-spotify"></i> Spotify</label>
            <div class="input-group">
                <input type="url" value="{{ setting('spotify') ?? old('spotify')}}" id="spotify" name="spotify" class="form-control auto-slug @error('spotify')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('spotify')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="soundcloud"><i class="fab fa-soundcloud"></i> SoundCloud</label>
            <div class="input-group">
                <input type="url" value="{{ setting('soundcloud') ?? old('soundcloud')}}" id="soundcloud" name="soundcloud" class="form-control auto-slug @error('soundcloud')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('soundcloud')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="steam"><i class="fab fa-steam"></i> Steam</label>
            <div class="input-group">
                <input type="url" value="{{ setting('steam') ?? old('steam')}}" id="steam" name="steam" class="form-control auto-slug @error('steam')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('steam')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="twitch"><i class="fab fa-twitch"></i> Twitch</label>
            <div class="input-group">
                <input type="url" value="{{ setting('twitch') ?? old('twitch')}}" id="twitch" name="twitch" class="form-control auto-slug @error('twitch')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('twitch')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="tumblr"><i class="fab fa-tumblr"></i> Tumblr</label>
            <div class="input-group">
                <input type="url" value="{{ setting('tumblr') ?? old('tumblr')}}" id="tumblr" name="tumblr" class="form-control auto-slug @error('tumblr')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('tumblr')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="vimeo"><i class="fab fa-vimeo"></i> Vimeo</label>
            <div class="input-group">
                <input type="url" value="{{ setting('vimeo') ?? old('vimeo')}}" id="vimeo" name="vimeo" class="form-control auto-slug @error('vimeo')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('vimeo')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="viber"><i class="fab fa-viber"></i> Viber</label>
            <div class="input-group">
                <input type="text" value="{{ setting('viber') ?? old('viber')}}" id="viber" name="viber" class="form-control auto-slug @error('viber')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('viber')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="weibo"><i class="fab fa-weibo"></i> Weibo</label>
            <div class="input-group">
                <input type="text" value="{{ setting('weibo') ?? old('weibo')}}" id="weibo" name="weibo" class="form-control auto-slug @error('weibo')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('weibo')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="whatsapp"><i class="fab fa-whatsapp"></i> Whatsapp</label>
            <div class="input-group">
                <input type="text" value="{{ setting('whatsapp') ?? old('whatsapp')}}" id="whatsapp" name="whatsapp" class="form-control auto-slug @error('whatsapp')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('whatsapp')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="youtube"><i class="fab fa-youtube"></i> Youtube</label>
            <div class="input-group">
                <input type="url" value="{{ setting('youtube') ?? old('youtube')}}" id="youtube" name="youtube" class="form-control auto-slug @error('youtube')is-invalid @enderror">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-link"></i></div>
                </div>
                @error('youtube')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
        </div>
    </div>
</div>
