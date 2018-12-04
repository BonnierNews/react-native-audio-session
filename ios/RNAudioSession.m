//
//  RNAudioSession.m
//  RNAudioSession
//
//  Created by Johan Kasperi (DN) on 2018-03-02.
//

#import "RNAudioSession.h"
#import <React/RCTLog.h>
#import <AVFoundation/AVFoundation.h>

@implementation RNAudioSession

static NSDictionary *_categories;
static NSDictionary *_options;
static NSDictionary *_modes;

+ (void)initialize {
    _categories = @{
        @"Ambient": AVAudioSessionCategoryAmbient,
        @"SoloAmbient": AVAudioSessionCategorySoloAmbient,
        @"Playback": AVAudioSessionCategoryPlayback,
        @"Record": AVAudioSessionCategoryRecord,
        @"PlayAndRecord": AVAudioSessionCategoryPlayAndRecord,
        @"MultiRoute": AVAudioSessionCategoryMultiRoute
   };
    _options = @{
        @"MixWithOthers": @(AVAudioSessionCategoryOptionMixWithOthers),
        @"DuckOthers": @(AVAudioSessionCategoryOptionDuckOthers),
        @"InterruptSpokenAudioAndMixWithOthers": @(AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers),
        @"AllowBluetooth": @(AVAudioSessionCategoryOptionAllowBluetooth),
        @"AllowBluetoothA2DP": @(AVAudioSessionCategoryOptionAllowBluetoothA2DP),
        @"AllowAirPlay": @(AVAudioSessionCategoryOptionAllowAirPlay),
        @"DefaultToSpeaker": @(AVAudioSessionCategoryOptionDefaultToSpeaker)
    };
    _modes = @{
        @"Default": AVAudioSessionModeDefault,
        @"VoiceChat": AVAudioSessionModeVoiceChat,
        @"VideoChat": AVAudioSessionModeVideoChat,
        @"GameChat": AVAudioSessionModeGameChat,
        @"VideoRecording": AVAudioSessionModeVideoRecording,
        @"Measurement": AVAudioSessionModeMeasurement,
        @"MoviePlayback": AVAudioSessionModeMoviePlayback,
        @"SpokenAudio": AVAudioSessionModeSpokenAudio
    };
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(category:(RCTResponseSenderBlock)callback)
{
    callback(@[[AVAudioSession sharedInstance].category]);
}

RCT_EXPORT_METHOD(options:(RCTResponseSenderBlock)callback)
{
    callback(@[[NSNumber numberWithInteger:[AVAudioSession sharedInstance].categoryOptions]]);
}

RCT_EXPORT_METHOD(mode:(RCTResponseSenderBlock)callback)
{
    callback(@[[AVAudioSession sharedInstance].mode]);
}

RCT_EXPORT_METHOD(setActive:(BOOL)active resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSError *error = nil;
    [[AVAudioSession sharedInstance] setActive:active withOptions:AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation error:&error];
    if (error) {
        reject(@"setActive", @"Could not set active.", error);
    } else {
        resolve(@[]);
    }
}

RCT_EXPORT_METHOD(setCategory:(NSString *)category options:(NSString *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString* cat = _categories[category];
    if (cat != nil && [[AVAudioSession sharedInstance].availableCategories containsObject:cat]) {
        NSError *error = nil;
        if (_options[options] != nil) {
            [[AVAudioSession sharedInstance] setCategory:cat withOptions:[_options[options] integerValue] error:&error];
        } else {
            [[AVAudioSession sharedInstance] setCategory:cat error:&error];
        }
        if (error) {
            reject(@"setCategory", @"Could not set category.", error);
        } else {
            resolve(@[]);
        }
    } else {
        NSDictionary *userInfo = @{
            NSLocalizedDescriptionKey: @"Could not set AVAudioSession category.",
            NSLocalizedFailureReasonErrorKey: @"The given category is not supported on this device.",
            NSLocalizedRecoverySuggestionErrorKey: @"Try another category."
        };
        NSError *error = [NSError errorWithDomain:@"RNAudioSession" code:-1 userInfo:userInfo];
        reject(@"setCategory", @"Could not set category.", error);
    }
}

RCT_EXPORT_METHOD(setMode:(NSString *)mode resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString* mod = _modes[mode];
    if (mod != nil && [[AVAudioSession sharedInstance].availableModes containsObject:mod]) {
        NSError *error = nil;
        [[AVAudioSession sharedInstance] setMode:mod error:&error];
        if (error) {
            reject(@"setMode", @"Could not set mode.", error);
        } else {
            resolve(@[]);
        }
    } else {
        NSDictionary *userInfo = @{
                                   NSLocalizedDescriptionKey: @"Could not set AVAudioSession mode.",
                                   NSLocalizedFailureReasonErrorKey: @"The given mode is not supported on this device.",
                                   NSLocalizedRecoverySuggestionErrorKey: @"Try another mode."
                                   };
        NSError *error = [NSError errorWithDomain:@"RNAudioSession" code:-1 userInfo:userInfo];
        reject(@"setMode", @"Could not set mode.", error);
    }
}

RCT_EXPORT_METHOD(setCategoryAndMode:(NSString *)category mode:(NSString *)mode options:(NSString *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString* cat = _categories[category];
    NSString* mod = _modes[mode];
    if (cat != nil && mod != nil && _options[options] != nil && [[AVAudioSession sharedInstance].availableCategories containsObject:cat] && [[AVAudioSession sharedInstance].availableModes containsObject:mod]) {
        NSError *error = nil;
        [[AVAudioSession sharedInstance] setCategory:cat mode:mod options:[_options[options] integerValue] error:&error];
        if (error) {
            reject(@"setCategoryAndMode", @"Could not set category and mode.", error);
        } else {
            resolve(@[]);
        }
    } else {
        NSDictionary *userInfo = @{
                                   NSLocalizedDescriptionKey: @"Could not set AVAudioSession category and mode.",
                                   NSLocalizedFailureReasonErrorKey: @"The given category or mode is not supported on this device.",
                                   NSLocalizedRecoverySuggestionErrorKey: @"Try another category or mode."
                                   };
        NSError *error = [NSError errorWithDomain:@"RNAudioSession" code:-1 userInfo:userInfo];
        reject(@"setCategoryAndMode", @"Could not set category and mode.", error);
    }
}

@end
