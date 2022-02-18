"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width150AtUnderMin = exports.Width800AtOverMax = exports.Width550AtMax = exports.Width400 = exports.Width250AtMin = exports.FluidWidth = exports.Example = void 0;
const react_1 = __importDefault(require("react"));
const TwitterEmbed_1 = require("../../components/embeds/TwitterEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
exports.default = {
    title: 'Embeds/TwitterEmbed',
    component: TwitterEmbed_1.TwitterEmbed,
};
const url = 'https://twitter.com/PixelAndBracket/status/1356633038717923333';
const placeholderImageUrl = `https://placekitten.com/550/325`;
const ToggledOnTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement(TwitterEmbed_1.TwitterEmbed, Object.assign({}, args))));
const ToggledOffTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(TwitterEmbed_1.TwitterEmbed, Object.assign({}, args))));
exports.Example = ToggledOnTemplate.bind({});
exports.Example.args = {
    url,
    width: 325,
};
exports.FluidWidth = ToggledOffTemplate.bind({});
exports.FluidWidth.args = {
    url,
    style: { maxWidth: 550 },
    width: '100%',
};
exports.Width250AtMin = ToggledOffTemplate.bind({});
exports.Width250AtMin.args = {
    url,
    width: 250,
};
exports.Width400 = ToggledOffTemplate.bind({});
exports.Width400.args = {
    url,
    width: 400,
};
exports.Width550AtMax = ToggledOffTemplate.bind({});
exports.Width550AtMax.args = {
    url,
    width: 550,
};
exports.Width800AtOverMax = ToggledOffTemplate.bind({});
exports.Width800AtOverMax.args = {
    url,
    width: 800,
};
exports.Width150AtUnderMin = ToggledOffTemplate.bind({});
exports.Width150AtUnderMin.args = {
    url,
    width: 150,
};
exports.UrlOnly = ToggledOffTemplate.bind({});
exports.UrlOnly.args = {
    url,
};
exports.WithPlaceholderImage = ToggledOffTemplate.bind({});
exports.WithPlaceholderImage.args = {
    url,
    placeholderImageUrl,
};
exports.CustomPlaceholder = ToggledOffTemplate.bind({});
exports.CustomPlaceholder.args = {
    url,
    embedPlaceholder: (react_1.default.createElement("div", { style: {
            width: 325,
            padding: '150px 0',
            backgroundColor: 'lightsteelblue',
            textAlign: 'center',
        } }, "Custom Placeholder!")),
};
exports.CustomPlaceholderLinkText = ToggledOffTemplate.bind({});
exports.CustomPlaceholderLinkText.args = {
    url,
    linkText: 'Custom link text',
};
exports.PlaceholderDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderDisabled.args = {
    url,
    placeholderDisabled: true,
};
